const container = document.querySelector("#categories");

const categoriesRef = container.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

const listCategoriesRef = [...categoriesRef].map(
   listCategor => `Категория: ${listCategor.children[0].textContent}
Количество элементов: ${listCategor.children[1].children.length}`
   )
   .join("\n");
console.log(listCategoriesRef);


// const ulEL = document.querySelector('#categories');
// console.log(`В списке ${ulEL.children.length} категории.`);

// const liEl = document.querySelectorAll('.item');
// liEl.forEach(el => {
//     const category = el.querySelector('h2');
//     const quantity = el.querySelector('ul');
//     console.log(`Категория: ${category.textContent}`);
//     console.log(`Количество элементов: ${quantity.children.length}`);
// });