// JavaScript for index.html

// Select the hamburger menu and add event listener
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);

// Function to toggle the mobile menu
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}
