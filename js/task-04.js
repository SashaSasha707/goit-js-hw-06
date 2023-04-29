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
const counterValue = document.getElementById("value");

console.log(decrementBtn.dataset.action);

let value = 0;

decrementBtn.addEventListener("click", () =>{
  value --;
  
  counterValue.textContent = value;
  // updateValue ();
});

incrementtBtn.addEventListener("click", () =>{
  value ++;
  counterValue.textContent = value;
  // updateValue ();
});

// function updateValue (){
//   counterValue.textContent = value;
// }
