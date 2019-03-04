const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const addRoutes = require('./routes/routes')
const db = require('./models')


const port = process.env.PORT || 3001


// const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

addRoutes(app, db)
db.sequelize.sync().then(function () {
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
})

