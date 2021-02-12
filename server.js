const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000
const cors = require('cors');
let info = require('./data.js')

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const runDetails = [];

//get all runs
app.get('/api/runs', (request, response) => {
  if(!info) {
      response.status(404).json({ message: 'No info found!' })
  }
  response.json(info)
  })

//get a specific post

//post a run
app.post('/api/run/', (req, res) => {
  const run = req.body.runDetails;
  console.log('Add run', runDetails);
  runDetails.push(run);
  res.json("Run added!");
})

//delete a run 
app.delete('/run/#', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})