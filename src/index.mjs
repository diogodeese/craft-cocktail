import cors from 'cors'
import express from 'express'
import mustacheExpress from 'mustache-express'
import mysql2 from 'mysql2'
import { default as __dirname, default as path } from 'path'
import { router } from './routes.mjs'

const app = express()
const port = 3001

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqldiogo8660', // Your Password
  database: 'craftcocktail',
})

app.use(
  cors({
    origin: '*',
  })
)

// Mustache engine
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache') // extensão dos ficheiros das views
app.set('views', path.join(__dirname.resolve(), 'src/views')) // indicação de qual a pasta que irá conter as views

app.use(express.json())
app.use(router)

app.listen(port, () => {
  connection.connect((err) => {
    if (err) throw err
    console.log('Connected to the database.')
  })

  console.log(`Example app listening on port ${port}`)
})
