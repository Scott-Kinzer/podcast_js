import './style.css';
import { isValid } from './utils';
import { Question } from './question';
const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');

form.addEventListener('submit', submitFormHandler)
window.addEventListener("load", Question.renderList)
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value);
})

function submitFormHandler(event) {
    event.preventDefault();

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }


        submitBtn.disabled = true;
        // Async request to server to save question
        Question.create(question).then(() => {
            input.value = "";
            input.className = "";
            submitBtn.disabled = "false";
        })
    }
}