'use strict';

const promoForm = document.querySelector('.handleUser');
const nameInput = document.querySelector('.main-input.-name');
const emailInput = document.querySelector('.main-input.-email');

promoForm.addEventListener('submit',evento => {
    evento.preventDefault();
    let nome = document.querySelector('.main-input.-name').value;
    let email = document.querySelector('.main-input.-email').value;

    let promoData = {
        nome,
        email
    };

    let convertData = JSON.stringify(promoData);

    localStorage.setItem('promoLead',convertData);

    nameInput.value = null;
    emailInput.value = null;
  
});