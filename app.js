const express = require('express')
const app = express()
const port = 3000

app.post('/log-push', (req, res) => {
  console.log(req.body)
  res.status(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})