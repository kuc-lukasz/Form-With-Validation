const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailValidation = document.querySelector(".email-validation");
const emailCorrect = document.querySelector('.email-val')


const password = document.querySelector("#password");
const passwordValidation = document.querySelector(".password-validation");
const passLength = document.querySelector('.password-val')

function alert (textArea, elementP, value) {
  if (value !== ""){
    elementP.classList.add('hidden')
    textArea.classList.remove('red-border')
    
  } else {
    elementP.classList.remove('hidden')
    textArea.classList.add('red-border')
    
  }

}

function containerDataAfterLogIn (emailEl, passEl) {
  const emailBoxAfterLog = document.querySelector('#user-email')
  const passBoxAfterLog = document.querySelector('#user-password')
  const credentialContainer = document.querySelector('.credentials')

  if(credentialContainer.classList.contains('hidden')){
    credentialContainer.classList.remove("hidden")
  } 
  emailBoxAfterLog.textContent = emailEl
  passBoxAfterLog.textContent = passEl
}

email.addEventListener('keyup', function (e) {
alert (email, emailValidation, email.value)
ValidateEmail(email.value)

})

password.addEventListener('keyup', function () {
  alert (password, passwordValidation, password.value)
  passwordValMinSign(password.value)
})


form.addEventListener('submit', function (e) {
e.preventDefault();
ValidateEmail(email) 

const emailLogicVersion = !!email.value;
const passwordLogicVersion = !!password.value


if (emailLogicVersion && passwordLogicVersion) {
containerDataAfterLogIn (email.value, password.value)
} else {

  alert(email, emailValidation, email.value )
  alert(password, passwordValidation, password.value )
}

})


function passwordValMinSign (pass) {
if (pass.length < 6 ) {
  passLength.classList.remove('hidden')
} else {
  passLength.classList.add('hidden')
}

}

function ValidateEmail(mail) {

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
  emailCorrect.classList.add('hidden')
  return
  } else {
  emailCorrect.classList.remove('hidden')
  return
  
  }
}