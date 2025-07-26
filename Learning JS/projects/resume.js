document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  // Simulate sending a message
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  
  if (name && email) {
      alert('Thank you, ' + name + '. Your message has been sent!');
  } else {
      alert('Please fill out all fields.');
  }
});