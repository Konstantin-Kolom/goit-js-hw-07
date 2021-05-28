const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const creatList = ingredients.forEach((ingredient) => {

   const groceryList = document.createElement('li')
   groceryList.textContent = ingredient

   const ingredientsRef = document.querySelector('#ingredients');

   ingredientsRef.appendChild(groceryList)
})
