
const numberInput = document.querySelector('#number-input');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const outputValue = document.querySelector('#number-output-text')


let count = 0;
function updateCounter() {
    outputValue.textContent = count;
};
plusButton.addEventListener("click", () => {
    const newInputNumber = parseInt(numberInput.value);
    count += newInputNumber;
    updateCounter();
   
});

minusButton.addEventListener("click", () => {
    const newInputNumber = parseInt(numberInput.value);
    count -= newInputNumber;
    updateCounter();
});
updateCounter();




