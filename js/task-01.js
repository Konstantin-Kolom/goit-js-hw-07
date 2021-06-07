const container = document.querySelector("#categories");
const categoriesRef = container.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории.`);

const listCategoriesRef = [...categoriesRef].map(
   listCategor => `Категория: ${listCategor.children[0].textContent}
Количество элементов: ${listCategor.children[1].children.length}`
   )
   .join("\n");
console.log(listCategoriesRef);


