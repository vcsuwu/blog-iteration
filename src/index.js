const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use('/public', express.static(path.resolve(__dirname, "../", "public")))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

