const input = document.querySelector('#name-input');
const yourname = document.querySelector('#name-output');
input.addEventListener('input', toInputName);

function toInputName(event) {
    console.log(event.currentTarget.value);
    input.value === '' ?
        (yourname.textContent = 'незнакомец') :
        (yourname.textContent = input.value);
}