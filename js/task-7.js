const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${rangeEl.value}px`;

console.log(textEl.style.fontSize);

rangeEl.addEventListener('input', onInputRange);

function onInputRange() {
    console.log(rangeEl.value);
    textEl.style.fontSize = `${rangeEl.value}px`;
}