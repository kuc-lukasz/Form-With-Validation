const form = document.querySelector("form");

const email = document.querySelector("#email");
const wrongEmailInfo = document.querySelector(".wrong-email");

const password = document.querySelector("#pass");
const wrongPassInfo = document.querySelector(".wrong-pass");

const credentialContainer = document.querySelector(".box-afterLog");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  dataAfterSubmit(email, password);
});

function dataAfterSubmit(email, password) {
  const emailDisplay = document.querySelector(".user-email");
  const passwordDisplay = document.querySelector(".user-pass");

  if (credentialContainer.classList.contains("hidden")) {
    credentialContainer.classList.remove("hidden");
    emailDisplay.innerText = email.value;
    passwordDisplay.innerText = password.value;
  }
}
