const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const fs = require('fs')

const privateKey  = fs.readFileSync('ssl/key.key', 'utf8')
const certificate = fs.readFileSync('ssl/crt.crt', 'utf8')

const credentials = {key: privateKey, cert: certificate}
const app = express()
const port = 3000

const jsonParser = bodyParser.json()

app.post('/log-push', jsonParser, (req, res) => {
  const payload = req.body
  console.log(payload)
  res.status(200).send('done')
})

const httpsServer = https.createServer(credentials, app)

httpsServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
