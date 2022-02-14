require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app =express()
const axios = require('axios')

const path = require('path')

axios
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('./', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.html'))
})


const port = process.env.PORT || process.env.SERVER_PORT
app.listen(port, () => console.log(`Server serving on ${port}`))