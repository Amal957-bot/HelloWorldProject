require('dotenv').config();

const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/logout', (req, res) => {
   res.send('logout successfull!')
})

app.get('/register', (req, res) => {
     res.send('Registartion successful!')
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});