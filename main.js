const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#pass");
const btnConfirm = document.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailInput.value === "") {
    emailInput.classList.add("red");
    const alert = document.createElement("div");
    alert.innerText = "To pole jest wymagane";
    const boxEmail = document.querySelector(".information-wrong-email");
    boxEmail.appendChild(alert);

    return;
  }
  if (passInput.value === "") {
    passInput.classList.add("red");
    const alert = document.createElement("div");
    alert.innerText = "To pole jest wymagane";
    const boxEmail = document.querySelector(".information-wrong");
    boxEmail.appendChild(alert);

    return;
  } else{

  const displayEmail = document.querySelector(".user-email");
  const displayPass = document.querySelector(".user-password");
  displayEmail.innerText = emailInput.value;
  console.log(passInput.value);
  displayPass.innerText = passInput.value;
  const boxAfterLog = document.querySelector(".box-afterLog");
  boxAfterLog.classList.remove("hidden");
  }
});

emailInput.addEventListener("keyup", () => {
  if (emailInput.value === "") {
    console.log(emailInput.value);
    emailInput.classList.add("red");
    const alert = document.createElement("div");
    alert.innerText = "To pole jest wymagane";
    const boxEmail = document.querySelector(".information-wrong-email");
    boxEmail.appendChild(alert);

  } else {
    emailInput.classList.remove("red");
  }
});

passInput.addEventListener("keyup", () => {
  if (passInput.value === "") {
    passInput.classList.add("red");
    const alert = document.createElement("div");
    alert.innerText = "To pole jest wymagane";
    const boxEmail = document.querySelector(".information-wrong");
    boxEmail.appendChild(alert);

    return;
  } else {
    passInput.classList.remove("red");
  }
  console.log(passInput.value);
});
