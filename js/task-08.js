const ref = {
   controls: document.querySelector('#controls'),
   inputNumber: controls.querySelector('input'),
   btnCreate: controls.querySelector('[data-action="render"]'),
   btnClear: controls.querySelector('[data-action="destroy"]'),
   boxes: document.querySelector('#boxes'),
}
const INITIAL_ITEM_SIZE = 25;

ref.btnCreate.addEventListener('click', createBoxes);
ref.btnClear.addEventListener('click', destroyBoxes);

const itemSize = {
  value: INITIAL_ITEM_SIZE,
  increment() {
    this.value += 10;
  },
  reset() {
    this.value = INITIAL_ITEM_SIZE;
  },
};

function createBoxes() {
  const amount = ref.inputNumber.value;
  const items = [];

  for (let i = 0; i < amount; i++) {
    const divItem = document.createElement('div');
    divItem.style.backgroundColor = getRandomColor();
    divItem.style.width = `${itemSize.value}px`;
    divItem.style.height = `${itemSize.value}px`;
    itemSize.increment();
    items.push(divItem);
  }

  ref.boxes.append(...items);
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function destroyBoxes() {
  ref.boxes.innerHTML = '';
  itemSize.reset();
}

function getRandomColor() {
  const red = getRandom(0, 255);
  const green = getRandom(0, 255);
  const blue = getRandom(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}