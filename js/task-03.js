// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/* Алгоритм
1. Перебрати масив
 1.1 Створити li
 1.2  Записати у li - img з src та alt
 1.3 Помістити li у ul
2. Помістити ul на сторінку (insertAdjacentHTML)
*/

const imagesList = document.querySelector(".gallery");
imagesList.style.display = "flex";

const imageContent = images
                      .map((image) => `<li> <img src="${image.url}" alt="${image.alt}" width = 200 </li>`)
                      .join('');

// const imageContent = images.reduce((accImg, image) => 
//   accImg + `<li> <img src="${image.url}" alt="${image.alt}"/> </li>`, ''
// );

const imageItem = `<ul>${imageContent}</ul>`
document.body.insertAdjacentHTML("beforeend", imageItem);

console.dir(imagesList);






