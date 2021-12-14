'use strict'

const button = document.querySelector ('.js_button');
const inputSelect  = document.querySelector ('.js_select');
const resultText = document.querySelector ('.js_result');
const userWin = document.querySelector ('.js_player');
const computerWin = document.querySelector ('.js_computer');




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

//No funciona la función
/*function score  () {
    let win = 0;
    
    if (resultText.innerHTML === "¡Has ganado!") {
        win += 1;
        userWin.innerHTML += win;

    } else if (resultText.innerHTML === "¡Has perdido!") {
        win += 1;
        computerWin.innerHTML += win;
    }
  }*/


function handleClickButton (event) {
    event.preventDefault();
    game ();
    //score ()
}

button.addEventListener ('click', handleClickButton);

