const subBtn = document.querySelector('#subBtn')
const title = document.getElementById('username')


subBtn.addEventListener('click', (evt) =>{
  evt.preventDefault()
  const usersName = {
      first: title.value
    }
    axios
        .get('/main')
        .then(res => 
            window.location.href = './main.html')
        .catch(err => console.log(err.response.data))
    axios
        .post('/landing', usersName)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data))


// function goToGamePage(body) {
//     console.log(body.title)
//     axios
//         .get('/main')
//         .then(res => 
//             window.location.href = './main.html')
//             // console.log(res.data)
//         .catch(err => console.log(err.response.data))
// }
    
//     axios
//         .post('/landing', usersName)
//         .then(res => goToGamePage(res.data))
//         .catch(err => console.log(err.response.data))
})