require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    if (process.env.AB === '1') {
        res.send('Hello World!')
    } else {
        res.send('World, Hello!')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
