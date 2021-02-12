const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000
const cors = require('cors');
let info = require('./data.js');
const { response } = require('express');

app.use(cors());
app.use(bodyParser.json())

const runDetails = [];

//get all runs
app.get('/api/runs', (req, res) => {
  res.json(info);
  })

// To do: get a specific run
app.get('/api/run/:id', (req, res) => {
  res.json(info.id)
})

//post a run
app.post('/api/run/', (req, res) => {
  const run = req.body.runDetails;
  console.log('Add run', runDetails);
  runDetails.push(run);
  res.json("Run added!");
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app