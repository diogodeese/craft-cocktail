import cors from 'cors'
import express from 'express'
import mysql2 from 'mysql2'
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
app.use(express.json())
app.use(router)

app.listen(port, () => {
  connection.connect((err) => {
    if (err) throw err
    console.log('Connected to the database.')
  })

  console.log(`Example app listening on port ${port}`)
})
