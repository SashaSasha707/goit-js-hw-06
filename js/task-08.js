
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

/*Алгоритм
1. Отримкємо form.login-form;
2. Створюємо подію submit;
3. Створюємо функцію обробника:
  - отримати доступ до всіх елементів через elements;
  - перевірка на заповнення всіх полів: 
      - через цикл перевіряємо чи всі поля заповнені; використовуємо value;
  - якщо ні - виводимо alert;
  - якщо всі поля заповнені - тоді створюємо обєкт із введенеми значеннями та додаємо до нього значення всіх полів через цикл;
  - виводимо дані у консоль;
  - очищаємо значення полів за допомогою методу reset.
  */
 
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", checkValidity);

  function checkValidity (event){
    event.preventDefault();

    const formElements = loginForm.elements;
    const formData = [];
    let isFormValid = true;

    for (const formElement of formElements) {
      if (formElement.type !== "submit") {
        if (formElement.value === "") {
          isFormValid = false;
          alert("Fill in all fields");
          break;
        } else {
          formData[formElement.name] = formElement.value;
        }
      }
    }
  
    if (isFormValid) {
      console.log(formData);
      loginForm.reset();
    }
  }