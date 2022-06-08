const dvd = document.querySelector('.logo-container');

const step = 4;
let xFactor = 1;
let yFactor = 1;

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

const moveInterval = setInterval(dvdBounce, 25);
