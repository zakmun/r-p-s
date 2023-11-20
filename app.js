const cpuChoiceDisplay = document.getElementById("cpu-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let cpuChoice
let result

// When a button is clicked (event) its gets the id (rock, paper, scissors) and stores inside of userChoice
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) =>{
   userChoice = e.target.id  
   userChoiceDisplay.innerHTML = userChoice;
   generateCpuChoice()
   getResult()
}));

// Gets a random number from the possibleChoices variable (3) for the CPU
function generateCpuChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber);

    if(randomNumber === 1){
        cpuChoice = 'Rock'
    } 
    if(randomNumber === 2){
        cpuChoice = 'Paper'
    } 
    if(randomNumber === 3){
        cpuChoice = 'Scissors'
    } 

    cpuChoiceDisplay.innerHTML = cpuChoice;
}

function getResult(){
    if(cpuChoice === userChoice){
        result = "It's a draw!"
    }
    else if(cpuChoice === 'Rock' &&  userChoice === 'Paper'){
        result = "You win!"
    }
    else if(cpuChoice === 'Scissors' &&  userChoice === 'Rock'){
        result = "You win!"
    }
    else if(cpuChoice === 'Paper' &&  userChoice === 'Scissors'){
        result = "You win!"
    }else{
        result = "You lost!"
    }
    resultDisplay.innerHTML = result;
}