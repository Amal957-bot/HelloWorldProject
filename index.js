require('dotenv').config()
const express = require('express')
const app = express()

// Use port from .env or fallback to 3000
const PORT = process.env.PORT || 3000

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Login successful!')
})

app.get('/logout', (req, res) => {
  res.send('Log out successful!')
})

app.get('/forgetpassword', (req, res) => {
  res.send('Change password!')
})

app.get('/application', (req, res) => {
  res.send('Application Completed Successfully!')
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
