const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let counter = 0;
const updateCounter = () => {
  counterElement.textContent = counter;
};
incrementButton.addEventListener('click', () => {
  counter++;
  updateCounter();
  history.pushState({ counter }, '', `${counter}`);
});

decrementButton.addEventListener('click', () => {
  counter--;
  updateCounter();
  history.pushState({ counter }, '', `${counter}`);
});

window.addEventListener('popstate', (event) => {
  if (event.state) {
    counter = event.state.counter;
    updateCounter();
  }
});

const urlParams = new URLSearchParams(window.location.search);
const initialCounter = parseInt(urlParams.get('counter'));
if (!isNaN(initialCounter)) {
  counter = initialCounter;
  updateCounter();
}
