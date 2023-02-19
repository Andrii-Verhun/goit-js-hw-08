const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formTextarea = document.querySelector('.feedback-form textarea');
const formStateReturn = JSON.parse(localStorage.getItem('feedback-form-state'));
const formState = {};

if (formStateReturn !== null) {
    formEmail.value = formStateReturn.email;
    formTextarea.value = formStateReturn.message;
};

form.addEventListener('input', throttle((e) => {
    e.preventDefault();

    formState.email = formEmail.value;
    formState.message = formTextarea.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    form.reset();
    localStorage.removeItem('feedback-form-state');
});

