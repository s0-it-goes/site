const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('nav');
const closeButton = document.getElementById('close-button');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  nav.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
  burgerMenu.classList.remove('open');
  nav.classList.remove('open');
});
