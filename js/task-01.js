// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.



const categoryItem = document.querySelectorAll(".item");
const categories = document.getElementById("categories");

console.log(`Number of categories: ${categoryItem.length}`);

categoryItem.forEach((category) => {
   
  const categoryTitle = category.firstElementChild.textContent;
  const categoryItemsCount = category.lastElementChild.children.length; //зветраюсь до останнього елеманта ul та потім до його дітей li
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});





