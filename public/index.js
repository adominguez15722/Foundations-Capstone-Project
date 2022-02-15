const baseURL = `https://foundations-capstone-project.herokuapp.com/`
const errCallback = err => console.log(err.response.data)
const dealBtn = document.querySelector('#deal')
const hitBtn = document.querySelector('#hit')
const stayBtn = document.querySelector('#stay')



const dealCards = () => axios.get(baseURL).then(console.log('you have made it to the index js file')).catch(errCallback)
// dealBtn.addEventListener('click', dealCards)
// hitBtn.addEventListener('click', hitMe)
// stayBtn.addEventListener('click', stay)

// console.log('hello world')
// app.get('./', shuffleCards)
dealCards();