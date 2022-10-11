let cards = []
let player = {
    name: "Jenelle",
    chips: 134
}
let sum = 0
let hasBlackJack = false
let isAlive = false
let gameOver = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let num = Math.floor(Math.random() * 13) + 1
    if (num == 1){
        return 11
    }else if (num > 10){
        return 10
    }else {
        return num
    }
}


function startGame(){
    isAlive = true
    if(gameOver === true){
        cards = []
        cardsEl.textContent = "Cards: "
        sum = 0
        hasBlackJack = false
    }
    let firstCard = getRandomCard()
    cards.push(firstCard)
    let secondCard = getRandomCard()
    cards.push(secondCard)

    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum :" + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    if (hasBlackJack === false && isAlive === true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }else{
        gameOver = true
    }
    
}




