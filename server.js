const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
let info = require('./data.js')

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/runs', (request, response) => {
  if(!info) {
      response.status(404).json({ message: 'No info found!' })
  }
  response.json(info)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})