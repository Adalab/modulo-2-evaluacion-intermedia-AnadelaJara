'use strict'

const button = document.querySelector ('.js_button');
const inputSelect  = document.querySelector ('.js_select');
const resultText = document.querySelector ('.js_result');
const userWin = document.querySelector ('.js_player');
const computerWin = document.querySelector ('.js_computer');
const reload = document.querySelector ('.js_reload');

let playerScore = 0;
let computerScore = 0;
let moves = 0;


function getRandomNumber (max){
    return Math.ceil(Math.random () * max);
}

function computerPlayer (){
    const randomNumber = getRandomNumber (10);
    let computerGame = '';
   
    // if (inputSelect.value === 'select') {
    //     console.log ('Seleccione jugada');}

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
    // if (userSelection === 'select') {
    //     console.log ('Seleccione jugada');}
    console.log(`La usuaria ha seleccionado ${userSelection}`);
    return userSelection;
   
  }
  
function game () {

    const computerResult = computerPlayer();
    const playerResult = userPlayer();

    moves++; //para aumentar el numero de jugadas
    console.log(moves);

    if (computerResult === playerResult) {
        resultText.innerHTML = 'Empate';
    } else if (computerResult === 'Piedra' && playerResult === 'Papel' ) {
        resultText.innerHTML = '¡Has ganado!';
        playerScore++; // aumentar ganado player
    } else if (computerResult === 'Papel' && playerResult === 'Tijera' ) {
        resultText.innerHTML = '¡Has ganado!'; 
        playerScore++;
    } else if (computerResult === 'Tijera' && playerResult === 'Piedra' ) {
            resultText.innerHTML = '¡Has ganado!';
            playerScore++;
    } else if (computerResult === 'Piedra' && playerResult === 'Tijera' ) {
        resultText.innerHTML = '¡Has perdido!'; 
        computerScore++; // aumentar ganado computer
    } else if (computerResult === 'Papel' && playerResult === 'Piedra' ) {
            resultText.innerHTML = '¡Has perdido!';
            computerScore++;
    } else if (computerResult === 'Tijera' && playerResult === 'Papel' ) {
        resultText.innerHTML = '¡Has perdido!';
        computerScore++;
    }
    computerWin.innerHTML = computerScore;
    userWin.innerHTML = playerScore;
}

function finalCounting() {
    if (moves === 10) {
        if (playerScore > computerScore) {
            resultText.innerHTML = "Has ganado el juego"
        } else if (playerScore < computerScore) {
            resultText.innerHTML = "Has perdido el juego"
        } else {
            resultText.innerHTML = "Empate"
        }
        button.classList.add("hidden");
        reload.classList.remove("hidden");
    }
}

function handleClickButton (event) {
    event.preventDefault();
    game ();
    finalCounting();
}


function handleClickReload (event) {
    event.preventDefault();
    button.classList.remove("hidden");
    reload.classList.add("hidden");
    playerScore = 0;
    computerScore = 0;
    moves = 0;
    resultText.innerHTML = "Vamos a jugar!"
    computerWin.innerHTML = computerScore;
    userWin.innerHTML = playerScore;
}

button.addEventListener ('click', handleClickButton);
reload.addEventListener ('click', handleClickReload);

