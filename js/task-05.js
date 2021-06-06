const inpetRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

inpetRef.addEventListener('input', event => {
   spanRef.textContent = event.target.value;
   if (event.target.valuet === '') {
      spanRef.innerHTML = 'незнакомец';
   }
   console.log(event.target.valuet = "");
      
})
