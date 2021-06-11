const container = document.querySelector("#categories");
const categoriesRef = container.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории.`);


categoriesRef.forEach(elem => {
    const category = elem.querySelector('h2');
    const quantity = elem.querySelector('ul');
    console.log(`Категория: ${category.textContent}`);
    console.log(`Количество элементов: ${quantity.children.length}`);
});

//////////////////
// const listCategoriesRef = [...categoriesRef].map(
//    listCategor => `Категория: ${listCategor.children[0].textContent}
// Количество элементов: ${listCategor.children[1].children.length}`
//    )
//    .join("\n");
// console.log(listCategoriesRef);

