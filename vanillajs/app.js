const max = document.getElementById("maxnumber");
const myChose = document.getElementById("chosenumber");
const result = document.querySelector("#result");
const eachnumber = document.querySelector("#eachnumber");
const numberForm = document.querySelector("#random-number");

const HIDDEN_CLASSNAME = "hidden";
const CHOSE_KEY = "number1"
const MACHINE_KEY = "number2"


function onNumberSubmit(event) {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() *max.value + 1);
    const number1 = myChose.value;
    const number2 = randomNumber;
    localStorage.setItem(CHOSE_KEY, number1);
    localStorage.setItem(MACHINE_KEY, number2);
    paintResult(number1, number2);
}

function paintResult(number1, number2) {
    eachnumber.innerText = `You chose: ${number1}, the machine chose: ${number2}`;
    number1 = parseInt(number1);
    if(number1 === number2){
        result.innerText = "You won!"
    } else {
        result.innerText = "You lost!"
    }
    eachnumber.classList.remove(HIDDEN_CLASSNAME);
    result.classList.remove(HIDDEN_CLASSNAME);
}

numberForm.addEventListener("submit", onNumberSubmit);

