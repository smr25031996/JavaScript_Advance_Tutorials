const button = document.querySelector("button");
const firstName = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const output = document.getElementById("sidebar");
const contact = document.getElementById("phone");


const email = document.querySelector("#email");
const myForm = document.querySelector("form");

button.addEventListener("click", ($event) => {
  $event.preventDefault();
  //   output.textContent = firstName.value + " " + lastname.value;
  //   output.textContent = email.value;
  const fullName = document.createElement("h4");
  const emailId = document.createElement("h4");
  fullName.textContent = firstName.value + " " + lastname.value;
  emailId.textContent = email.value;
  const phone=document.createElement('h4');
  phone.textContent=contact.value;

  output.appendChild(fullName);
  output.appendChild(emailId);
  output.appendChild(phone);
  console.log(fullName);
  myForm.reset();
});
