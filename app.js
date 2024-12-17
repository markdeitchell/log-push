const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const fs = require('fs')

const privateKey  = fs.readFileSync('ssl/key.key', 'utf8')
const certificate = fs.readFileSync('ssl/crt.crt', 'utf8')

const credentials = {key: privateKey, cert: certificate}
const app = express()
const port = 3000
var httpsServer = https.createServer(credentials, app)

const jsonParser = bodyParser.json()

httpsServer.post('/log-push', jsonParser, (req, res) => {
  const payload = req.body
  console.log(payload)
  res.status(200).send('done')
})

httpsServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
