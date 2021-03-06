class Cards {
constructor(name, type, value) {
    this.name = name;
    this.type = type;
    this.value = value
    }
}

let aceS = new Cards('Ace', 'Spades', 11);
let twoS = new Cards('Two', 'Spades', 2);
let threeS = new Cards('Three', 'Spades', 3);
let fourS = new Cards('Four', 'Spades', 4);
let fiveS = new Cards('Five', 'Spades', 5);
let sixS = new Cards('Six', 'Spades', 6);
let sevenS = new Cards('Seven', 'Spades', 7);
let eightS = new Cards('Eight', 'Spades', 8);
let nineS = new Cards('Nine', 'Spades', 9);
let tenS = new Cards('Ten', 'Spades', 10);
let jackS = new Cards('Jack', 'Spades', 10);
let queenS = new Cards('Queen', 'Spades', 10);
let kingS = new Cards('King', 'Spades', 10);


let aceD = new Cards('Ace', 'Diamonds', 11);
let twoD = new Cards('Two', 'Diamonds', 2);
let threeD = new Cards('Three', 'Diamonds', 3);
let fourD = new Cards('Four', 'Diamonds', 4);
let fiveD = new Cards('Five', 'Diamonds', 5);
let sixD = new Cards('Six', 'Diamonds', 6);
let sevenD = new Cards('Seven', 'Diamonds', 7);
let eightD = new Cards('Eight', 'Diamonds', 8);
let nineD = new Cards('Nine', 'Diamonds', 9);
let tenD = new Cards('Ten', 'Diamonds', 10);
let jackD = new Cards('Jack', 'Diamonds', 10);
let queenD = new Cards('Queen', 'Diamonds', 10);
let kingD = new Cards('King', 'Diamonds', 10);


let aceH = new Cards('Ace', 'Hearts', 11);
let twoH = new Cards('Two', 'Hearts', 2);
let threeH = new Cards('Three', 'Hearts', 3);
let fourH = new Cards('Four', 'Hearts', 4);
let fiveH = new Cards('Five', 'Hearts', 5);
let sixH = new Cards('Six', 'Hearts', 6);
let sevenH = new Cards('Seven', 'Hearts', 7);
let eightH = new Cards('Eight', 'Hearts', 8);
let nineH = new Cards('Nine', 'Hearts', 9);
let tenH = new Cards('Ten', 'Hearts', 10);
let jackH = new Cards('Jack', 'Hearts', 10);
let queenH = new Cards('Queen', 'Hearts', 10);
let kingH = new Cards('King', 'Hearts', 10);


let aceC = new Cards('Ace', 'Clubs', 11);
let twoC = new Cards('Two', 'Clubs', 2);
let threeC = new Cards('Three', 'Clubs', 3);
let fourC = new Cards('Four', 'Clubs', 4);
let fiveC = new Cards('Five', 'Clubs', 5);
let sixC = new Cards('Six', 'Clubs', 6);
let sevenC = new Cards('Seven', 'Clubs', 7);
let eightC = new Cards('Eight', 'Clubs', 8);
let nineC = new Cards('Nine', 'Clubs', 9);
let tenC = new Cards('Ten', 'Clubs', 10);
let jackC = new Cards('Jack', 'Clubs', 10);
let queenC = new Cards('Queen', 'Clubs', 10);
let kingC = new Cards('King', 'Clubs', 10);


let deckOfCards = [aceS, twoS, threeS, fourS, fiveS, sixS, sevenS, eightS, nineS, tenS, jackS, queenS, kingS, aceD, twoD, threeD, fourD, fiveD, sixD, sevenD, eightD, nineD, tenD, jackD, queenD, kingD, aceH, twoH, threeH, fourH, fiveH, sixH, sevenH, eightH, nineH, tenH, jackH, queenH, kingH, aceC, twoC, threeC, fourC, fiveC, sixC, sevenC, eightC, nineC, tenC, jackC, queenC, kingC];
let result = [];
let discard = [];
let playerOne = [];
let dealer = [];
let totalHand = () => playerOne.reduce((prev, cur) => prev + +cur.value, 0);
let totalDealerHand = () => dealer.reduce((prev, cur) => prev + +cur.value, 0);



function burnDeck()  {
        
    // get rid of let burn =
    const randomInd = Math.floor(Math.random() * deckOfCards.length)
    
    let rand = deckOfCards[randomInd]
    
    
    for (let i = 0; i < 1; i++) {
        discard.push(rand)
        deckOfCards.splice(randomInd, 1)
        
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}


function newAce(total) {
    for(let i = 0; i < total.length; i++){
        if(total[i].name === 'Ace' && totalHand() > 21){
            total[i].value = 1
        }   else if(total[i].name === 'Ace' && totalHand() <= 21){
            total[i].value = 11
        }
    }
}
function newAceDealer(total) {
    for(let i = 0; i < total.length; i++){
        if(total[i].name === 'Ace' && totalDealerHand() > 21){
            total[i].value = 1
        }   else if(total[i].name === 'Ace' && totalDealerHand() <= 21){
            total[i].value = 11
        }
    }
}

function aceValue(total) {
    // let totalHand = playerOne.reduce((prev, cur) => prev + +cur.value, 0);
    // let totalDealerHand = dealer.reduce((prev, cur) => prev + +cur.value, 0);
   
    
    
    if(total <= 21){
        aceC.value = 11
        aceH.value = 11
        aceD.value = 11
        aceS.value = 11
    // }   else if(totalHand <= 21){
    //         aceC.value = 11
    //         aceH.value = 11
    //         aceD.value = 11
    //         aceS.value = 11
    // if(totalHand <= 21){
    //     aceC.value = 11
    //     aceH.value = 11
    //     aceD.value = 11
    //     aceS.value = 11
    }   else{
            aceC.value = 1
            aceH.value = 1
            aceD.value = 1
            aceS.value = 1
    }
}

module.exports = {

dealCards: (req, res) => {
    playerOne = []
    dealer = []
    shuffle(deckOfCards);
    burnDeck();
    for (let i = 0; i < 2; i++) {


        let randOne = Math.floor(Math.random() * deckOfCards.length)
        let randPlayOne = deckOfCards[randOne]
        playerOne.push(randPlayOne)
        deckOfCards.splice(randOne, 1)
        
        let dealTwo = Math.floor(Math.random() * deckOfCards.length)
        let dealerPlayTwo = deckOfCards[dealTwo]
        dealer.push(dealerPlayTwo)
        deckOfCards.splice(dealTwo, 1)
    }
    // let totalHand = playerOne.reduce((prev, cur) => prev + +cur.value, 0);
    // let totalDealerHand = dealer.reduce((prev, cur) => prev + +cur.value, 0);

    newAce(playerOne)
    newAceDealer(dealer)

    // aceValue(totalHand());
    // aceValue(totalDealerHand());
    let results = [playerOne, dealer]

    res.status(200).send(results)
    
    },
    
hitMe: (req, res) => {
    burnDeck();
    newAce(playerOne)
    console.log(playerOne)
    // aceValue(totalHand())
    let randOne = Math.floor(Math.random() * deckOfCards.length)
    let randPlayOne = deckOfCards[randOne]
    playerOne.push(randPlayOne)
    deckOfCards.splice(randOne, 1)
    
    newAce(playerOne);
    // aceValue(totalHand());
    let results = [playerOne, totalHand()]
    res.status(200).send(results)
    },

stay: (req, res) => {
    burnDeck();
    newAce(playerOne)
    newAceDealer(dealer)
    // aceValue(totalHand());
    // aceValue(totalDealerHand())


        while(totalDealerHand() < 17)
        {
            newAceDealer(dealer)
            let newTotal = totalDealerHand()
            let dealTwo = Math.floor(Math.random() * deckOfCards.length)
            let dealerPlayTwo = deckOfCards[dealTwo]
            dealer.push(dealerPlayTwo)
            deckOfCards.splice(dealTwo, 1)
            newTotal += dealerPlayTwo.value
            // aceValue(totalDealerHand())
            newAceDealer(dealer)
            console.log(dealer)

        }
        console.log(dealer)
        let totals = [totalHand(), totalDealerHand(), dealer]
        // console.log(totals)

            res.status(200).send(totals)
    
},

playAgain: (req, res) => {
    
    deckOfCards = deckOfCards.concat(discard, playerOne, dealer)
    discard = []
    playerOne = []
    dealer = []
    

    res.sendStatus(200)
},

postingUser: (req, res) => {
    const {first} = req.body
    let newUser = {
        title: first
    }
    res.status(200).send(newUser)
}


};