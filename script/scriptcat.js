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

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const errorMessage = document.getElementById('errorMessage');

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const searchValue = searchInput.value.toLowerCase();

    if (searchValue === 'chair' || searchValue === 'стул' || searchValue === 'стулья' || searchValue === 'стульчик' || searchValue === 'стулик') {
      window.location.href = 'chairs.html';
    } else {
      errorMessage.textContent = 'Некорректный ввод';
    }
  }
});

searchButton.addEventListener('click', () => {
  const searchValue = searchInput.value.toLowerCase();

  if (searchValue === 'chair' || searchValue === 'стул' || searchValue === 'стулья' || searchValue === 'стульчик' || searchValue === 'стулик') {
    window.location.href = 'chairs.html';
  } else {
    errorMessage.textContent = 'Некорректный ввод';
  }
});