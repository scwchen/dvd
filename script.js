const dvd = document.querySelector('.logo-container');

const step = 4;
let xFactor = 1;
let yFactor = 1;
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

const init = () => {

  window.addEventListener('resize', () => {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
  });

  const initX = randCoord(winWidth / 2);
  const initY = randCoord(winHeight / 2);

  dvd.style.left = initX + 'px';
  dvd.style.top = initY + 'px';

  const moveInterval = setInterval(dvdBounce, 25);
};

const randCoord = (max) => {
  return Math.floor(Math.random() * max);
};

const dvdBounce = () => {
  const coords = dvd.getBoundingClientRect();

  if (coords.right + (step * xFactor) > window.innerWidth || coords.left + (step * xFactor) < 0) {
    xFactor *= -1;
  }
  if (coords.bottom + (step * yFactor) > window.innerHeight || coords.top + (step * yFactor) < 0) {
    yFactor *= -1;
  }

  dvd.style.left = (coords.left + step * xFactor) + 'px'
  dvd.style.top = (coords.top + step * yFactor) + 'px';
};

init();