const baseURL = `https://foundations-capstone-project.herokuapp.com/`
const errCallback = err => console.log(err.response.data)
const dealBtn = document.querySelector('#deal')
const hitBtn = document.querySelector('#hit')
const stayBtn = document.querySelector('#stay')
const playAgainBtn = document.querySelector('#play-again')
const histBtn = document.querySelector('#history')
const howBtn = document.querySelector('#how')
const playerHand = document.querySelector('#player_hand')
const dealerHand = document.querySelector('#dealer_hand')
const imageDiv = document.querySelector('#card_images')
const vidSpan = document.querySelector('#dumb')
let winCounter = 0

function disableAtStart() {
    hitBtn.disabled = true;
    stayBtn.disabled = true;
    playAgainBtn.disabled = true;
}

function addToScreen(dataArr) {
    playerHand.innerHTML = ""
    dealerHand.innerHTML = ""
    let playHand = dataArr[0]
    let dealHand = dataArr[1]
    let cardPic = document.createElement('img')
    cardPic.src = "./images/deck_of_cards.jpeg"
    imageDiv.appendChild(cardPic)

    playerHand.textContent = `You received the ${playHand[0].name} of ${playHand[0].type} and ${playHand[1].name} of ${playHand[1].type} for a total of ${playHand[0].value + playHand[1].value}.`
    
    dealerHand.textContent = `The dealer received the ${dealHand[0].name} of ${dealHand[0].type} and ${dealHand[1].name} of ${dealHand[1].type}.`

    if(playHand[0].name === 'Ace' && playHand[0].type === 'Clubs'){
        let cardPic = document.createElement('img')
        cardPic.src = "./images/aceC.jpg"
        imageDiv.appendChild(cardPic)
    } else if (playHand[0].name === 'Ace' && playHand[0].type === 'Diamonds'){
        let cardPic = document.createElement('img')
        cardPic.src = "./images/aceD.jpg"
        imageDiv.appendChild(cardPic)
    } else if (playHand[0].name === 'Ace' && playHand[0].type === 'Spades'){
        let cardPic = document.createElement('img')
        cardPic.src = "./images/aceS.jpg"
        imageDiv.appendChild(cardPic)
    } else if (playHand[0].name === 'Ace' && playHand[0].type === 'Hearts'){
        let cardPic = document.createElement('img')
        cardPic.src = "./images/aceH.jpg"
        imageDiv.appendChild(cardPic)
    }
    
    if(playHand[1].name === 'Ace' && playHand[1].type === 'Clubs'){
        let cardPic = document.createElement('img')
        cardPic.src = "./images/aceC.jpg"
        imageDiv.appendChild(cardPic)
    } else if (playHand[1].name === 'Ace' && playHand[1].type === 'Diamonds'){
        let cardPic = document.createElement('img')
        cardPic.src = "./images/aceD.jpg"
        imageDiv.appendChild(cardPic)
    } else if (playHand[1].name === 'Ace' && playHand[1].type === 'Spades'){
        let cardPic = document.createElement('img')
        cardPic.src = "./images/aceS.jpg"
        imageDiv.appendChild(cardPic)
    } else if (playHand[1].name === 'Ace' && playHand[1].type === 'Hearts'){
        let cardPic = document.createElement('img')
        cardPic.src = "./images/aceH.jpg"
        imageDiv.appendChild(cardPic)
    }
}

function updatePlayerTotal(dataArr) {
    let dealtCard = dataArr[0]
    let total = dealtCard.length
    // console.log(dataArr)
    function disable(){
        hitBtn.disabled = true;
        stayBtn.disabled = true;
    }
    if(dataArr[1] > 21){
        disable()
        playerHand.textContent = `You received the ${dealtCard[total - 1].name} of ${dealtCard[total - 1].type} and your new total is ${dataArr[1]}. You busted.`
    } else{
        playerHand.textContent = `You received the ${dealtCard[total - 1].name} of ${dealtCard[total - 1].type} and your new total is ${dataArr[1]}.`
    }
}

function updateDealerTotal(dataArr) {
    let playerCardsTotal = dataArr[0]
    let dealerCardsTotal = dataArr[1]
    let dealerCards = dataArr[2]
    console.log(dealerCards)
    function showVid(){
        vidSpan.style.display = 'block'
    }
    
    if(playerCardsTotal === 5){
        showVid()
    } else if(playerCardsTotal < dealerCardsTotal && dealerCardsTotal <= 21){
        // playerHand.textContent = ""
        dealerHand.textContent = `The dealer has ${dealerCardsTotal} and you have ${playerCardsTotal}. You lose.`
    
    } else if(playerCardsTotal > dealerCardsTotal && playerCardsTotal <= 21){
        // playerHand.textContent = ""
        dealerHand.textContent = `The dealer has ${dealerCardsTotal} and you have ${playerCardsTotal}. You win!!`
        winCounter++

    } else if(playerCardsTotal === dealerCardsTotal){
        // playerHand.textContent = ""
        dealerHand.textContent = `The dealer has ${dealerCardsTotal} and you have ${playerCardsTotal}. Push!`
    
    } else if(dealerCardsTotal > 21){
        // playerHand.textContent = ""
        dealerHand.textContent = `The dealer has ${dealerCardsTotal} and you have ${playerCardsTotal}. You win!!`
        winCounter++

    } else if(dealerCardsTotal === 21 && playerCardsTotal < 21){
        // playerHand.textContent = ""
        dealerHand.textContent = `The dealer has ${dealerCardsTotal} and you have ${playerCardsTotal}. You lose.`
    }
}

dealBtn.addEventListener('click', () => {
    axios
        .get('/cards')
        .then(res => addToScreen(res.data))
        .catch(errCallback)

        function disable(){
            dealBtn.disabled = true;
        }
        disable()
        hitBtn.disabled = false;
        stayBtn.disabled = false;
        playAgainBtn.disabled = true;
        
})

hitBtn.addEventListener('click', () => {
    axios
        .get('/hit')
        .then(res => updatePlayerTotal(res.data))
        .catch(errCallback)
        playAgainBtn.disabled = false;
})
stayBtn.addEventListener('click', () => {
    axios
        .get('/stay')
        .then(res => updateDealerTotal(res.data))
        .catch(errCallback)
        hitBtn.disabled = true;
        stayBtn.disabled = true;
        playAgainBtn.disabled = false;
})
playAgainBtn.addEventListener('click', () => {
    imageDiv.innerHTML = ""
    playerHand.textContent = ""
    dealerHand.textContent = ""
    axios
        .get('/again')
        .then(res => console.log(res.data))
        .catch(errCallback)
    
    dealBtn.disabled = false;
    hitBtn.disabled = true;
    stayBtn.disabled = true;
    playAgainBtn.disabled = true;

    function hideVid(){
        vidSpan.style.display = 'none'
        // vidSpan.setAttribute('src', "")
    }
    hideVid()
})

histBtn.addEventListener('click', () => {
    const articleOne = document.querySelector('#article')
    articleOne.innerHTML = ""
    articleOne.textContent = "There is actually a theory that Blackjack is an invention by the Romans. The theory stands because Romans loved to gamble, but it is not confirmed. It is believed that Romans played this game with wooden blocks with different numbers painted on them, instead of paper cards. return \r\n";
   
    articleOne.textContent += "Besides the various versions of Vingt-et-Un, the popularity of the card games expanded through North America. The card game has made it to the American shore in the 18th century with the help of French colonists. The game could not spread and develop in France in the 19th century. However, during this time the game evolved and gained popularity in America. The game would be seen in New Orleans in 1820 at the legalized gambling halls. Interesting enough, during this time the rules were different than the contemporary Blackjack we now know. For instance in the earlier form of Blackjack only the dealer was allowed to double. return \r\n"; 
    
    articleOne.textContent += "Also during this time, there was a tale of Eleanor Dumont. She was born in France and immigrated to America. She was a skilled dealer and was traveling around until she opened a gambling hall in Nevada City, California. Ironically, the place was named Vingt-et-Un. People were coming from all around the country to play against Eleanor, just because she was considered a rarity between card dealers."
})

howBtn.addEventListener('click', () => {
    const articleOne = document.querySelector('#article')
    articleOne.innerHTML = ""
    articleOne.textContent = `Step 1: Get your cards dealt
    
    Here you get 2 cards dealt to you. Also, in this step the dealer will show one of his cards to you.
    
    Step 2: Decide when you want another card
    
    You can press "Hit me" button and get more cards to get increase value of your hand. But if you cross 21 and go bust, you lose. You have to make sure that you have healthy hand and that if it cross values of 16 or 17, you should decide if you are willing to take a risk. This is the most important part of the blackjack game and this part decides whether you end up winning or not.
    
    Step 3: Staying
    
    As you get ready to play your hand and you are satisfied with it, press the "I'll Stay" button. This way the dealer knows that this is your final hand and you will not be taking more cards from them and will play with this.

    Step 4: Understand your opponent's hand
    
    You should analyze your dealer's hand. You can already see their first card and understand the value, now you should have a look at their entire hand. Keep in mind that the dealer will take cards until they have, at minimum, a value of 17, so if you have a hand with a higher value, then you have a great chance of winning.
    
    Step 7: The outcome
    
    You will win if the value of the cards in your hand are higher than the dealers or is equal to 21. If the value of your hand is lower than the dealers or cross 21 than you will lose to the dealer.`
})

disableAtStart();