const form = document.querySelector("form");
const emailInput = document.querySelector("#email")
const passInput = document.querySelector('#pass')
const btnConfirm = document.querySelector('button')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(emailInput)
    console.log(passInput)

})

emailInput.addEventListener('keyup', ()=> 
console.log(emailInput.value)

)
passInput.addEventListener('keyup', ()=> {
    console.log(passInput.value)
})