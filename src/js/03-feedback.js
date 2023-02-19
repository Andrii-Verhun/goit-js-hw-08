const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formTextarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const formStateReturn = JSON.parse(localStorage.getItem(STORAGE_KEY));
const formState = {};

if (formStateReturn !== null) {
    formEmail.value = formStateReturn.email;
    formTextarea.value = formStateReturn.message;
};

form.addEventListener('input', throttle((e) => {
    e.preventDefault();

    formState.email = formEmail.value;
    formState.message = formTextarea.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}, 500));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
});

