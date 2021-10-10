const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailValidation = document.querySelector(".email-validation");

const password = document.querySelector("#password");
const passwordValidation = document.querySelector(".password-validation");

function updateValidation(el, validationEl, value) {
  if (value) {
    el.classList.remove("red-border");
    validationEl.classList.add("hidden");
  } else {
    el.classList.add("red-border");
    validationEl.classList.remove("hidden");
  }
}

function renderUserData(email, password) {
  const credentialsContainer = document.querySelector(".credentials");
  const userEmail = document.querySelector("#user-email");
  const userPassword = document.querySelector("#user-password");

  if (credentialsContainer.classList.contains("hidden")) {
    credentialsContainer.classList.remove("hidden");
  }
  userEmail.textContent = email;
  userPassword.textContent = password;
}

email.addEventListener("keyup", function (e) {
  updateValidation(email, emailValidation, e.target.value);
});

password.addEventListener("keyup", function (e) {
  updateValidation(password, passwordValidation, e.target.value);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isEmailValid = !!email.value;
  const isPasswordValid = !!password.value;

  if (isEmailValid && isPasswordValid) {
    renderUserData(email.value, password.value);
  } else {
    updateValidation(email, emailValidation, email.value);
    updateValidation(password, passwordValidation, password.value);
  }
});