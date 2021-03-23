const counter = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function decrementBtnCalc() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

decrement.addEventListener('click', decrementBtnCalc);

function incrementBtnCalc() {
    counterValue += 1;
    counter.textContent = counterValue;
}
increment.addEventListener('click', incrementBtnCalc);