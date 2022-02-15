const {dealCards, hitMe} = require('./controller')

const dealBtn = document.querySelector('#deal')
const hitBtn = document.querySelector('#hit')

dealBtn.addEventListener('click', dealCards)
hitBtn.addEventListener('click', hitMe)

console.log('hello world')
// app.get('./', shuffleCards)