const subBtn = document.querySelector('button')

subBtn.addEventListener('click', () =>{
    axios
        .get('/landing')
        .then(location.href='https://foundations-capstone-project.herokuapp.com/')
        .catch(err => console.log(err.response.data))
})