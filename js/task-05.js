// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputForm = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

inputForm.addEventListener("input", insertName);

function insertName(event){
    const value = event.target.value;
    if(value.trim() !== "") {                               //trim - не зараховує пробіли
        nameOutput.textContent = value;
    } else {
        nameOutput.textContent = 'Anonymous'
    }
}