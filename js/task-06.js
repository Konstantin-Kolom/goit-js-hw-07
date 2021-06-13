const inputVal = document.getElementById("validation-input");
const inputLength = inputVal.getAttribute("data-length");
const intTotallenght = parseInt(inputLength, 10);

inputVal.addEventListener('blur', onInput);

function onInput() {
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
     inputVal.classList.remove("valid");
  }
};
