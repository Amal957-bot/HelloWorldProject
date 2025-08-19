const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/logout', (req, res) => {
   res.send('log out successfull!')
})

app.get('/forgetpassword', (req, res) => {
   res.send('change password!')
})

app.get('/forgetpassword', (req, res) => {
   res.send('change password!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

