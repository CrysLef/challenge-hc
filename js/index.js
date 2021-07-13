'use strict';

const promoButon = document.querySelector('.default-button .-sale');
const promoInput = document.querySelector('.main-input .-sale');
console.log(document.querySelector('.main-input .-name'))
console.log(document.querySelector('.main-input .-email'))

promoButon.addEventListener('submit',evento => {
    evento.preventDefault();
    promoInput.value = null;
})

const setLocalStorage = function() {
    promoButon.addEventListener('click',() => {
        localStorage.setItem('nome',`${inputValueName}`)
        localStorage.setItem('email',`${inputValueEmail}`)
    })
}