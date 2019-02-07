const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'pictochatapi',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY email ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const email = parseInt(request.params.email)
  
    pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

  const updateUser = (request, response) => {
    const email = parseInt(request.params.email)
    const { email, password } = request.body
  
    pool.query(
      'UPDATE users SET email = $1, password = $2 WHERE email = $3',
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
    const email = parseInt(request.params.email)
  
    pool.query('DELETE FROM users WHERE email = $1', [email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${email}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
  }