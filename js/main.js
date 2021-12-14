'use strict'

const button = document.querySelector ('.js_button');
const selectInput = document.querySelector ('.js_inputSelected');
const resultText = document.querySelector ('.js_result');

console.log();


function getRandomNumber (max){
    return Math.ceil(Math.random () * max);
}

function computerPlayer (){
    const randomNumber = getRandomNumber (10);
    let computerGame = '';
    console.log('El número aleatorio es el ' + randomNumber);
    if(randomNumber < 3){
        computerGame = 'Piedra';
        console.log('El movimiento del PC es piedra');
    }else if (randomNumber >= 6){
        computerGame = 'Papel'
        console.log('El movimiento del PC es papel');
    } else {
        computerGame = 'Tijera'
        console.log('El movimiento del PC es tijera');
    }
    return computerGame;
}
 
function userPlayer (){
    const userSelection = selectInput.value; 
    let userGame = '';

    if (userSelection === 'piedra'){
        userGame = 'Piedra';
        (console.log('La jugada del usuario es piedra'))
    } else if(userSelection === 'papel'){
        userGame = 'Papel';
        (console.log('La jugada del usuario es papel'))
    } else {
        userGame = 'Tijera';
        (console.log('La jugada del usuario es tijera'))
    }
    return userGame;
}

function game () {
    const computerResult = computerPlayer;
    const playerResult = userPlayer;

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
    
}



button.addEventListener ('click', handleClickButton);