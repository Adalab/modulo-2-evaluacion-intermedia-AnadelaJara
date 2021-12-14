'use strict'

const button = document.querySelector ('.js_button');
const selectInput = document.querySelector ('.js_inputSelected');


console.log();



function getRandomNumber (max){
    return Math.ceil(Math.random () * max);
}

function computerPlayer (){
    const randomNumber = getRandomNumber (10);
    console.log('El número aleatorio es el ' + randomNumber);
    if(randomNumber < 3){
    console.log('El movimiento del PC es piedra');
    }else if (randomNumber >= 6){
    console.log('El movimiento del PC es papel');
    } else {
    console.log('El movimiento del PC es tijera');
    }
}
 
computerPlayer ();


function userPlayer (){
    const userSelection = selectInput.value; 

    if (userSelection === 'piedra'){
        (console.log('La jugada del usuario es piedra'))
    } else if(userSelection === 'papel'){
        (console.log('La jugada del usuario es papel'))
    } else {
        (console.log('La jugada del usuario es tijera'))
    }
}

userPlayer ();


function handleClickButton () {

}



button.addEventListener ('click', handleClickButton);