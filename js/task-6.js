const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', toInputBlur);
inputEl.addEventListener('focus', onInputFocus);

function toInputBlur() {
    inputEl.value.length === Number(inputEl.getAttribute('data-length')) ?
        inputEl.classList.add('valid') :
        inputEl.classList.add('invalid');
    console.log(inputEl.value.length);
}

function onInputFocus() {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
}