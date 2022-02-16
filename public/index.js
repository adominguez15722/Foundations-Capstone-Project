const baseURL = `https://foundations-capstone-project.herokuapp.com/`
const errCallback = err => console.log(err.response.data)
const dealBtn = document.querySelector('#deal')
const hitBtn = document.querySelector('#hit')
const stayBtn = document.querySelector('#stay')
const playAgainBtn = document.querySelector('#play-again')
const histBtn = document.querySelector('#history')
const howBtn = document.querySelector('#how')

// const cardsCallback = ({data: cards}) => 

histBtn.addEventListener('click', () => {
    const articleOne = document.querySelector('#article')
    articleOne.innerHTML = ""
    articleOne.textContent = 'This is the history of blackjack'
})

howBtn.addEventListener('click', () => {
    const articleOne = document.querySelector('#article')
    articleOne.innerHTML = ""
    articleOne.textContent = 'This is how to play blackjack'
})

dealBtn.addEventListener('click', () => {
    axios
        .get('/cards')
        .then(res => console.log(res.data))
        .catch(errCallback)

        function disable(){
            dealBtn.disabled = true;
        }
        disable()
})

hitBtn.addEventListener('click', () => {
    axios
        .get('/hit')
        .then(res => console.log(res.data))
        .catch(errCallback)
})
stayBtn.addEventListener('click', () => {
    axios
        .get('/stay')
        .then(res => console.log(res.data))
        .catch(errCallback)
})
playAgainBtn.addEventListener('click', () => {
    axios
        .get('/again')
        .then(res => console.log(res.data))
        .catch(errCallback)
    
    dealBtn.disabled = false;
    // window.location.reload();
})

const test = () => axios.get(baseURL).then(console.log('you have made it to the index js file')).catch(errCallback)



test();