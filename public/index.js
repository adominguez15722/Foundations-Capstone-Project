const baseURL = `https://foundations-capstone-project.herokuapp.com/`
const errCallback = err => console.log(err.response.data)
const dealBtn = document.querySelector('#deal')
const hitBtn = document.querySelector('#hit')
const stayBtn = document.querySelector('#stay')

// const cardsCallback = ({data: cards}) => 


dealBtn.addEventListener('click', () => {
    axios
        .get(`${baseURL}/cards`)
        .then(res => console.log(res.data))
        .catch(errCallback)
})

const test = () => axios.get(baseURL).then(console.log('you have made it to the index js file')).catch(errCallback)



test();