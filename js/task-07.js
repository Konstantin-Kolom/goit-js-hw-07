const inputRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text')

inputRef.addEventListener('click', el => {
   spanRef.style.fontSize = el.screenX
   let size = `${el.screenX}px`;
   spanRef.style.fontSize = size;
})

