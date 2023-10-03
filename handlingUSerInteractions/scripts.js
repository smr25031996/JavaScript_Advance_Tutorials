// DOM ELEMENT REFERENCES
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const submitButton = document.getElementById("submit-button");
const sidebar = document.getElementById("sidebar");
const formVal = document.querySelector("form");
const  phone=document.getElementById('contact');

submitButton.addEventListener("click", ($event) => {
  event.preventDefault();

  console.log(firstNameInput.value);
  console.log(lastNameInput.value);
  sidebar.textContent = `${firstNameInput.value} ${lastNameInput.value} ${phone.value}`;
  formVal.reset();
});
