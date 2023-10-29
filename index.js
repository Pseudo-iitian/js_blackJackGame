
let firstCard = 0
let secondCard = 0
let cardArray = []

let hasBlackjack = false
let isAlive = true
let message = ""
let onGoing = true;
let sum = 0
let end = false;

let player = {
  name : "Abhishek ",
  chips : 145
}

document.getElementById('player-el').textContent = player.name + ": $" + player.chips

const getRandomCards = () => {
  let min = 2;
  let max = 11;
  let r = Math.random();
  let card = r * (max - min) + min;
  card = parseInt(card)
  if(card===1) card = 11;
  else if(card>10) card = 10;
  return card;
}

function startGame() {
  if (isAlive && onGoing==true){
    firstCard = getRandomCards()
    secondCard = getRandomCards()
    cardArray.push(firstCard)
    cardArray.push(secondCard)
    sum = firstCard + secondCard;
    onGoing = false;
    renderGame()
  }
}


const renderGame = () => {

  let ans = ""
  for (let val of cardArray) {
    ans = ans + val + " ";
  }
  document.getElementById('cards').textContent = "Cards: " + ans;
  document.getElementById('sum').textContent = "Sum: " + sum
  if (sum < 21) {
    message = ("Do you want to draw a new card? 🙂")
  }
  else if (sum === 21) {
    message = ("Wohoo! You've got Blackjack! 🥳")
    hasBlackjack = true
  }
  else {
    message = ("You're out of the game! No need to play further. 😭")
    isAlive = false
  }
  document.getElementById('message').textContent = message

  if(hasBlackjack){
    alert(message)
    end = true
  }
}

const newCard = () => {
  if(isAlive && onGoing==false && !end){
    let newCrd = getRandomCards()
    cardArray.push(newCrd)
    sum += newCrd
    renderGame()
  }
}

const reloadPage = () => {
  document.getElementById("reload-btn").addEventListener("click", function() {
    location.reload();
  });
}




















// let age = 32;
// if(age<21){
//   console.log("U can't enter into the club")
// }
// else{
//   console.log("Welcome to the club")
// }


// let age = 100

// if(age<100){
//   console.log("Not elegible")
// }
// else if(age===100){
//   console.log("Here is your birthday card from the King!")
// }
// else{
//   console.log("Not elegible, you have already gotten one")
// }

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]
// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])
// let newmessage = "Same here!"
// experience.push(newmessage)
// console.log(experience)
// experience.pop()
// console.log(experience)



// let array = ["I am Abhishek Verma",21,true]
// console.log(array)

// let hasCompletedCourse = true;
// let giveCertficate = true;

// if(hasCompletedCourse && giveCertficate){
//   console.log("Generating Certificate...")
// }
// else{
//   console.log("First Complete the course")
// }