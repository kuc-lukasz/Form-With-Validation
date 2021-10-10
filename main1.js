const form = document.querySelector("form");

const email = document.querySelector("#email");
const wrongEmailInfo = document.querySelector(".wrong-email");

const password = document.querySelector("#pass");
const wrongPassInfo = document.querySelector(".wrong-pass");

const credentialContainer = document.querySelector(".box-afterLog");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const passIsLogicValue = !!password.value;
  const emailIsLogicValue = !!email.value;
  const passwordLen = document.querySelector("#pass").value;
  const passLengthDisplay = document.querySelector(".pass-length")

  if (passwordLen.length < 6) {
    password.classList.add("border");
    passLengthDisplay.classList.remove("hidden");
    
  } else if (passIsLogicValue && emailIsLogicValue) {
    dataAfterSubmit(email, password);
  } else {
    validation(email, wrongEmailInfo, email.value);
    validation(password, wrongPassInfo, password.value, password.value);
  }
});

function dataAfterSubmit(email, password) {
  const emailDisplay = document.querySelector(".user-email");
  const passwordDisplay = document.querySelector(".user-pass");

  if (credentialContainer.classList.contains("hidden")) {
    credentialContainer.classList.remove("hidden");
  }
  emailDisplay.innerText = email.value;
  passwordDisplay.innerText = password.value;
}

email.addEventListener("keyup", (e) => {
  validation(email, wrongEmailInfo, e.target.value);
});

password.addEventListener("keyup", (e) => {
  validation(password, wrongPassInfo, e.target.value);
  passwordLength(password, password.value)
});

function validation(emailOrPass, alert, currentValue) {
  if (currentValue != "") {
    emailOrPass.classList.remove("border");
    alert.classList.add("hidden");
  } else {
    emailOrPass.classList.add("border");
    alert.classList.remove("hidden");
  }
}

function passwordLength(pass, passCurrent) {

  const passLengthDisplay = document.querySelector(".pass-length");

  if (passCurrent.length > 6) {
    pass.classList.remove("border");
    passLengthDisplay.classList.add("hidden");
    
  } else {
    pass.classList.add("border");
    passLengthDisplay.classList.remove("hidden");
  }
}
