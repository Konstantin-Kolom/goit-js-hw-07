const inputRef = document.querySelector('#validation-input');
const inputMaxLength = inputRef.getAttribute('data-length');


console.log(inputMaxLength);

const createAttribute = inputRef.setAttribute('maxlength', 'inputMaxLength')

// console.log(inputRef.maxlength.value);
// console.log(inputRef.maxlength);
// console.dir(inputRef.attributes);

// inputRef.addEventListener('input', () => {
//    console.log('inputRef');
//    // if (inputRef.input === inputRef.dataLength) {
//    //    inputRef.classList('.valid');
//    //    // console.log(validationMessage === 'ok');
      
//    // }
// })


// const changeIdValid = inputRef.getElementById('#validation-input')

///////
// function changeIdValid () {
//    const e = document.getElementById('validation-input');
//    e.id = "validation-input.valid";

// }
// console.log(changeIdValid);


let inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function() {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }
  if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
    inputVal.classList.add("invalid");
  }
};