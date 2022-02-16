require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {dealCards, hitMe, stay} = require('../server/controller')
const app =express()
// const session = require('express-session')
const { SERVER_PORT, SERVER_SECRET } = process.env
// const axios = require('axios')

const path = require('path')


app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// app.use(session({
//     secret: SERVER_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 7
//     }
// }))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.html'))
})
app.get('cards', dealCards)


const port = process.env.PORT || SERVER_PORT
app.listen(port, () => console.log(`Server serving on ${port}`))