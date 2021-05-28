// const container = document.querySelector("#categories");

// const listRef = container.querySelectorAll('.item');
// console.log(`В списке ${listRef.length} категории.`);

// // console.log(`В списке ${listRef.childNodes.textContent}`);
// const titleRef = container.querySelectorAll('h2');
// const titleLinkRer = container.querySelectorAll('ul');

// titleRef.forEach((categ) => {
//    console.log(`Категория: ${categ.textContent}`)
//    console.log(`Категория: ${categ.childNodes.length}`)
// console.log(categ.childNodes);
// }
//    );

// titleLinkRer.forEach(quantity =>
//    console.log(`Количество элементов: ${quantity.children.length}`));


const container = document.querySelector("#categories");

const listRef = container.querySelectorAll('.item');
console.log(`В списке ${listRef.length} категории.`);

const titleRef = container.querySelectorAll('h2');
const titleLinkRer = container.querySelectorAll('ul');

titleRef.forEach(categ =>
   console.log(`Категория: ${categ.textContent}`)
);

titleLinkRer.forEach(quantity =>
   console.log(`Количество элементов: ${quantity.children.length}`));