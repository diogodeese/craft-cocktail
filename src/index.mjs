import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mustacheExpress from 'mustache-express'
import { default as __dirname, default as path } from 'path'
import { getConnection } from './config/database-connection.mjs'
import { router } from './routes.mjs'

const app = express()
const port = 3001

const connection = getConnection()

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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
