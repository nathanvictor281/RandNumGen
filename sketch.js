// p5.js setup function
function setup() {
  noCanvas();

  const generateButton = select('#generateButton');
  generateButton.mousePressed(generateRandomNumber);

  const diceButton = select('#numClicks');
  diceButton.mousePressed(rollDice);
}

let numClicks = 1;
let minNumber = 1;
let maxNumber = 18;

// Roll the dice to determine the number of clicks
function rollDice() {
  numClicks = Math.floor(random(1, 7));
  const diceButton = select('#numClicks');
  diceButton.html(`&#9856; ${numClicks}`);
}

// Generate a random number
function generateRandomNumber() {
  const numberDisplay = select('#numberDisplay');

  if (minNumber <= maxNumber) {
    const randomNumber = Math.floor(random(minNumber, maxNumber + 1));
    numberDisplay.html(randomNumber);
  } else {
    numberDisplay.html('Invalid Range');
  }
}

// Update the minimum and maximum values
function updateRange() {
  minNumber = parseInt(select('#minNumber').value());
  maxNumber = parseInt(select('#maxNumber').value());
}

// Event listener for range inputs
const minNumberInput = select('#minNumber');
minNumberInput.input(updateRange);

const maxNumberInput = select('#maxNumber');
maxNumberInput.input(updateRange);



