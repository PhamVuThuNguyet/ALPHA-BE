require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
const routes = require('./routes')
const connectDB = require('./config/database.config')

app.use(cors())

app.use(express.json())

app.use(
  express.urlencoded({
    extended: true,
  })
)

routes(app)
connectDB()

app.listen(3001, () => {
  console.log(`Example app listening on port ${port}`)
})
