
// JavaScript for contact.html

// Select form and add event listener
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  
  // Convert form data to object
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  // Send form data to server
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    // Clear form fields
    form.reset();
    
    // Display success message
    const successAlert = document.createElement('div');
    successAlert.classList.add('alert', 'alert-success');
    successAlert.textContent = 'Thank you for your message!';
    form.parentNode.insertBefore(successAlert, form.nextSibling);
  })
  .catch(error => {
    // Display error message
    const errorAlert = document.createElement('div');
    errorAlert.classList.add('alert', 'alert-danger');
    errorAlert.textContent = 'An error occurred. Please try again later.';
    form.parentNode.insertBefore(errorAlert, form.nextSibling);
  });
}
