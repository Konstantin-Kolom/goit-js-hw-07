const buttonWrapper = {
  add: document.querySelector("[data-action='decrement']"),
  sub: document.querySelector("[data-action='increment']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter '),
};

let counterValue = 0;

const decrement = () => {
  counterValue += Number(buttonWrapper.add.textContent);
  document.getElementById('value').textContent = counterValue;
};

const increment = () => {
  counterValue += Number(buttonWrapper.sub.textContent);
  document.getElementById('value').textContent = counterValue;
};

buttonWrapper.sub.addEventListener('click', increment);
buttonWrapper.add.addEventListener('click', decrement);

