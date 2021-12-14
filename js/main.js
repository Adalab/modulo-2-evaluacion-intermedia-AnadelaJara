'use strict'

const button = document.querySelector ('.js_button');
const inputSelect  = document.querySelector ('.js_select');
const resultText = document.querySelector ('.js_result');
const userTries = document.querySelector ('.js_player');
const computerTries = document.querySelector ('.js_computer');
let attempsUser = 0;
let attempsComputer = 0;



function getRandomNumber (max){
    return Math.ceil(Math.random () * max);
}

function computerPlayer (){
    const randomNumber = getRandomNumber (10);
    let computerGame = '';
   

    if(randomNumber < 3){
        computerGame = 'Piedra';
        

    }else if (randomNumber >= 6){
        computerGame = 'Papel'
        
    } else {
        computerGame = 'Tijera'
    }
    console.log('El número aleatorio es el ' + randomNumber);
    console.log(`El ordenador ha sacado: ${computerGame}`);
    return computerGame;
}
 

function userPlayer () {
    const userSelection = inputSelect.value;
    console.log(`La usuaria ha seleccionado ${userSelection}`);
    return userSelection;
  }
  
function game () {
   
    const computerResult = computerPlayer();
    const playerResult = userPlayer();

    if (computerResult === playerResult) {
        resultText.innerHTML = 'Empate';
    } else if (computerResult === 'Piedra' && playerResult === 'Papel' ) {
        resultText.innerHTML = '¡Has ganado!';
    } else if (computerResult === 'Papel' && playerResult === 'Tijera' ) {
        resultText.innerHTML = '¡Has ganado!'; 
    } else if (computerResult === 'Tijera ' && playerResult === 'Piedra' ) {
            resultText.innerHTML = '¡Has ganado!';
    } else if (computerResult === 'Piedra ' && playerResult === 'Tijera' ) {
        resultText.innerHTML = '¡Has perdido!'; 
    } else if (computerResult === 'Papel ' && playerResult === 'Piedra' ) {
            resultText.innerHTML = '¡Has perdido!';
    } else if (computerResult === 'Tijera ' && playerResult === 'Papel' ) {
        resultText.innerHTML = '¡Has perdido!';
    }
}

function handleClickButton (event) {
    event.preventDefault();
    game ();
    countingAttemps (); 
}

button.addEventListener ('click', handleClickButton);

function score () {
    let acc = 0;
    if (msgResult.innerHTML === "¡Has ganado!") {
      acc += 1;
      playerCounterSpan.innerHTML = acc;
    } else if (msgResult.innerHTML === "¡Has perdido!") {
      acc += 1;
      pcCounterSpan.innerHTML = acc;
    }
  }


/*function countingUserAttemps () {
    attempsUser += 1;
    userTries.innerHTML = attempsUser;
}

function countingUserAttemps () {
    attempsComputer += 1;
    userComputer.innerHTML = attempsComputer;}*/
