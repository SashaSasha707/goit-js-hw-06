// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementtBtn = document.querySelector('button[data-action="increment"]');

console.log(decrementBtn.dataset.action);

/*Алговритм
1. Стоврити зміну counterValue
2. Створити події на кнопки та додати до них функцію оновлення інтерфейсу
3. Стоврити функцію оновлення
*/

let counterValue = 0;

decrementBtn.addEventListener("click", () =>{
  counterValue --;

  updateValue();
});

incrementtBtn.addEventListener("click", () =>{
  counterValue ++;

  updateValue();
});

function updateValue (){
  const count = document.getElementById("value");
  count.innerText = counterValue.toString();
}
