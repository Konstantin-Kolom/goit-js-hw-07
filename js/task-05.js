const inpetRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

inpetRef.addEventListener('input', addName);

function addName(event) {
    spanRef.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
      spanRef.textContent = 'незнакомец';
   }
};


//////////////////////////

// inpetRef.addEventListener('input', event => {
//    spanRef.textContent = event.target.value;
//    if (event.target.valuet === '') {
//       spanRef.innerHTML = 'незнакомец';
//    }
//    console.log(event.target.valuet = "");
      
// })
