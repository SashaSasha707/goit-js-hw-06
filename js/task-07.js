// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

//Алгоритм
// 1. Отримати посилання на елементи input#font-size-control та span#text за допомогою методу document.getElementById.
// 2. Додати до елемента input#font-size-control обробник події "input", який викличе функцію при кожній зміні значення.
// У функції відловити поточне значення font-size з елемента input#font-size-control через value.
// Оновити властивість font-size для елемента span#text з отриманого значення font-size, додати обовязково px.


const inputRange = document.getElementById("font-size-control");
const inputSpan = document.getElementById("text");

inputSpan.style.fontSize = `${inputRange.value}px`; //приводимо до значення px 

inputRange.addEventListener("input", rangeText);

function rangeText(event){
    
    const fontSize = event.target.value;
    inputSpan.style.fontSize = `${fontSize}px`
}