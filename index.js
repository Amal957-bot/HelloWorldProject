const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/login', (req, res) => {
   res.send('login successfull!')
})

app.get('/logout', (req, res) => {
   res.send('log out successfull!')
})


app.get('/forgetpassword', (req, res) => {
   res.send('change password!')
})


app.get('/register', (req, res) => {
     res.send('Registartion successful!')
=======
app.get('/application', (req, res) => {
   res.send('Application Completed Successfully!')

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

