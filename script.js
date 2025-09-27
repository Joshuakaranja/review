// grab elements from dom
const valueDisplay = document.getElementById('value');
const incrementButton = document.getElementById('increase');
const decrementButton = document.getElementById('decrease');

//start value 
let count = 0;

//increase value

incrementButton.addEventListener("click", () => {
    count++;
    valueDisplay.textContent = count;

});

//decrease value
decrementButton.addEventListener("click", () => {
    count--;
    valueDisplay.textContent = count;

});

//reset value
valueDisplay.addEventListener("dblclick", () => {
    count = 0;
    valueDisplay.textContent = count;

});

// create reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.getElementById("buttons").appendChild(resetButton);

// create step input
const stepInput = document.createElement("input");
stepInput.type = "number";
stepInput.value = 1;
stepInput.min = 1;
stepInput.style.marginLeft = "20px";
document.getElementById("buttons").appendChild(stepInput);

// update step value