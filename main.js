const form = document.querySelector("form");
const emailInput = document.querySelector("#email")
const passInput = document.querySelector('#pass')
const btnConfirm = document.querySelector('button')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(emailInput.value)
    console.log(passInput.value)

})