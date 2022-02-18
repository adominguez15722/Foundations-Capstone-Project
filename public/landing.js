const subBtn = document.querySelector('button')

subBtn.addEventListener('', () =>{
    axios
        .post('/landing')
        .then(res => 

            // location.href='https://foundations-capstone-project.herokuapp.com/')
        )
        .catch(err => console.log(err.response.data))
})