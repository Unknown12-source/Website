// JavaScript for about.html

// Select the read more buttons and add event listeners
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
  button.addEventListener('click', toggle)
}
)
