require('dotenv').config()
const express = require('express')
const app = express()

// get port from .env or default to 3000
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('login successful!')
})

app.get('/logout', (req, res) => {
  res.send('log out successful!')
})

app.get('/forgetpassword', (req, res) => {
  res.send('change password!')
})

app.get('/application', (req, res) => {
  res.send('Application Completed Successfully!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
