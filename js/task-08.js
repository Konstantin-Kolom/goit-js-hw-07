const controlsRef = document.querySelector('#controls');
const inputNumberRef = controlsRef.querySelector('input')
const btnCreateRef = controlsRef.querySelector('[data-action="render"]')
const btnClearRef = controlsRef.querySelector('[data-action="destroy"]')

const boxesRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', () => {
   boxesRef.textContent = inputNumberRef.value;
})

btnClearRef.addEventListener('click', () => {
   boxesRef.textContent = "";
})
