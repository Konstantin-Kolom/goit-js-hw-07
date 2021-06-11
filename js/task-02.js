const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector('#ingredients')

const newArrIngredient = ingredients.map(elem => {
  const li = document.createElement('li');
  li.textContent = elem;
  return li;
});

ingredientsRef.append(...newArrIngredient);
console.log(ingredientsRef);


///////////////////


// const creatList = ingredients.forEach((ingredient) => {

//    const groceryList = document.createElement('li')
//    groceryList.textContent = ingredient

//    const ingredientsRef = document.querySelector('#ingredients');

//    ingredientsRef.appendChild(groceryList)
// })
