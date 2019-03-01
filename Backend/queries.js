const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'pictochatdb',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM pictochat.accounts ORDER BY email ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getUserByEmail = (request, response) => {
    const email = request.params.email
  
    pool.query('SELECT * FROM pictochat.accounts WHERE email = $1', [email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}


const authenticateUser = (request, response) => {
  const email = request.params.email
  const password = request.params.password
  console.log("here", email, password)

  pool.query('SELECT COUNT(*) FROM pictochat.accounts WHERE email = $1 AND password = $2', [email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const createUser = (request, response) => {
    const { email, password } = request.body
  
    pool.query('INSERT INTO pictochat.accounts (email, password) VALUES ($1, $2)', [email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with email: ${results.insertEmail}`)
    })
}

const updateUser = (request, response) => {
    const email = parseInt(request.params.email)
    const { password } = request.body
  
    pool.query(
      'UPDATE pictochat.accounts SET email = $1, password = $2 WHERE email = $3',
      [email, password],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${email}`)
        }
    )
}

const deleteUser = (request, response) => {
    const email = request.params.email
  
    pool.query('DELETE FROM pictochat.accounts WHERE email = $1', [email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with email: ${email}`)
    })
}

module.exports = {
    getUsers,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    authenticateUser,
}