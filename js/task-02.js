// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUL = document.getElementById("ingredients");
const ingredientsItem = ingredients.map((ingredient) => {
  const ingridientLi = document.createElement("li");
  ingridientLi.textContent = ingredient;
  ingridientLi.classList.add("item");
  return ingridientLi;
})


ingredientsUL.append(...ingredientsItem);

console.log(ingredientsUL);
