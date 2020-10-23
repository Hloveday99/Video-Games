const express = require("express")

const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.get('/test',(req, res) => {
    res.send('Hello Tester let me make changes!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

