// Function to handle form submission
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const responseElement = document.getElementById("form-response");

  if (name && email && message) {
    responseElement.textContent = `Thank you, ${name}! Your message has been sent.`;
    responseElement.style.color = "green";
  } else {
    responseElement.textContent = "Please fill out all fields.";
    responseElement.style.color = "red";
  }
}

