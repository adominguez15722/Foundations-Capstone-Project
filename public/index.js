require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {shuffleCards, dealCards} = require('./controller')
const app =express()

app.use(cors())
app.use(express.json())

app.get('./', shuffleCards)


const port = process.env.PORT || process.env.SERVER_PORT
app.listen(port, () => console.log(`Server serving on ${port}`))