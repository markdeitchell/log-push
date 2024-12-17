const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

const jsonParser = bodyParser.json()

app.post('/log-push', jsonParser, (req, res) => {
  const payload = req.body
  console.log(payload)
  res.status(200).send('done')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})