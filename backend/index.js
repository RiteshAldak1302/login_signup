const connect_to_mongo = require('./db');
const express = require('express')

connect_to_mongo();
const app = express()
const port = 5000


app.get('/', (req, res) => {
    res.send('Hello Ritesh!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })