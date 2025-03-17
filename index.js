// script.js
const buttons = document.querySelectorAll('.aSkills');
const targets = document.querySelectorAll('.skillSet');


let prevButton = null;
let prevTarget = null;

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (prevButton) {
      prevButton.style.backgroundColor = '';
      prevTarget.style.color = '';
      prevTarget.style.display = 'none';
    }

    button.style.backgroundColor = 'red';
    targets[index].style.display = 'block';
    
    prevButton = button;
    prevTarget = targets[index];

  });
});

const downloadLink = document.getElementById('cvBtn');
const cvFile = "CV/PitsoCV.pdf";
downloadLink.href = cvFile;
downloadLink.download = "PitsoCV.pdf";

/*const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch('https://formspree.io/f/xpwpwdpb', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});*/

const form = document.getElementById('contact-form');
const messageInput = document.getElementById('msg'); // assuming this is the message input field
const emailInput = document.getElementById('email'); // assuming this is the email input field

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch('https://formspree.io/f/xpwpwdpb', {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert('Sent successfully!'); // display success message
      messageInput.value = ''; // clear message input field
      emailInput.value = ''; // clear email input field
    })
    .catch((error) => console.error(error));
});

