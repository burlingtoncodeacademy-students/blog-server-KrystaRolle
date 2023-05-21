require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const router = require('./controllers/routes.js')

app.use('/', router)

app.listen(38833, () => {
  console.log('hey, I am listening!')
})