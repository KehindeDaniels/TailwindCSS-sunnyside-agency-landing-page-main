// script.js
const hamburger = document.querySelector('.hamburger');
const mobilenavMenu = document.querySelector('.mobilenav-menu');

hamburger.addEventListener('click', () => {
  mobilenavMenu.classList.toggle('hidden'); // Toggle the 'hidden' class
});
