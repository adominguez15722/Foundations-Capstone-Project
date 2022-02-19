require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {dealCards, hitMe, stay, playAgain, postingUser} = require('../server/controller')
const app =express()
// const session = require('express-session')
const { SERVER_PORT, SERVER_SECRET } = process.env
// const axios = require('axios')

const path = require('path')


app.use(cors())
app.use(express.json())
app.use(express.static('public'))
// app.use(express.static('public/images'))

// app.use(session({
//     secret: SERVER_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 7
//     }
// }))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/landing.html'))
})
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.html'))
})
app.post('/landing', postingUser)
app.get('/cards', dealCards)
app.get('/hit', hitMe)
app.get('/stay', stay)
app.get('/again', playAgain)
app.get('/logout', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/landing.html'))
})


const port = process.env.PORT || SERVER_PORT
app.listen(port, () => console.log(`Server serving on ${port}`))