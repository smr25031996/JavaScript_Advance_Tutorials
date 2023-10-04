const passwordInput = document.getElementById("password-input");
const confirmPassword = document.getElementById("confirm-password");
const errorMsg = document.getElementById("error-message");
const but=document.querySelector('button');

confirmPassword.addEventListener("blur", () => {
  if (passwordInput.value === confirmPassword.value) {
    passwordInput.style.border = " solid green";
    confirmPassword.style.border = " solid green";
    errorMsg.style.display = "none";
  } else {
    passwordInput.style.border = "solid red";
    confirmPassword.style.border = "solid red";
    errorMsg.style.display = "inline";
  }
});

