const express = require('express')
const app = express()
const port = 3000

app.post('/log-push', (req, res) => {
  console.log(req)
  res.status(200).send('done')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})