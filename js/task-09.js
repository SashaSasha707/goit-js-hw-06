// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.






/*Алгоритм
1. Створити змінні кнопки, спану
2. Додати обробник подій click 
3. Створити функцію рандомного кольору:
    - стоворити зміну де буде зберігатись колір:
    - через стилі встановити рандомний колір;
    - через текст контент у спан виводи значення кольору
*/

const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", randomColor);

function randomColor(){
  const color = getRandomHexColor();
  document.body.style.background = color;
  spanColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
