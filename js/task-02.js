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

const ulIng = document.getElementById("ingredients");
for (const ingredient of ingredients) {
  const liIng = document.createElement("li");
  liIng.textContent = ingredient;
  liIng.classList.add("item");
  ulIng.appendChild(liIng); 
};

document.body.prepend(ulIng);

console.log(ulIng);
