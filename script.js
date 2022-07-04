const dvd = document.querySelector('.logo-container');

const step = 2;
const colours = ['0000ff', 'ff0000', '008000', 'ffa500', 'ffffff', '00d5ff', 'bf00ff'];
let colourIndex = 0;
let xFactor = 1;
let yFactor = 1;
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

// ===========================================
// Initialization Function
// ===========================================
const init = () => {
  // Setting an initial coordinate for the logo
  const initX = randCoord(winWidth / 2);
  const initY = randCoord(winHeight / 2);
  dvd.style.left = initX + 'px';
  dvd.style.top = initY + 'px';

  // Setting interval for how often the logic will occur
  setInterval(dvdBounce, 10);
};

// ===========================================
// Function to retrieve random number given the maximum possible value
// ===========================================
const randCoord = (max) => {
  return Math.floor(Math.random() * max);
};

// ===========================================
// Function to change direction and colour when logo hits a wall
// ===========================================
const dvdBounce = () => {
  const coords = dvd.getBoundingClientRect();

  // Logic to handle whether a wall has been hit and to change direction and colour accordingly
  if (coords.right + (step * xFactor) > window.innerWidth || coords.left + (step * xFactor) < 0) {
    xFactor *= -1;
    changeColour();
  } else if (coords.bottom + (step * yFactor) > window.innerHeight || coords.top + (step * yFactor) < 0) {
    yFactor *= -1;
    changeColour();
  }

  // This is the new location of the logo according to the step size and the direction (xFactor, yFactor)
  dvd.style.left = (coords.left + step * xFactor) + 'px'
  dvd.style.top = (coords.top + step * yFactor) + 'px';

};

// ===========================================
// Function to set the colour of the logo
// ===========================================
const changeColour = () => {
  dvd.querySelector('img').style.filter = `opacity(0.8) contrast(70%) drop-shadow(0 0 0 #${colours[colourIndex]}) saturate(1000%)`;
  
  // We have a set colour array so we will run through and loop back around to the start when required
  if (colourIndex < colours.length - 1) {
    colourIndex += 1;
  } else {
    colourIndex = 0;
  }
}

// Initializing the page
init();