const form = document.querySelector("form");
const emailInput = document.querySelector("#email")
const passInput = document.querySelector('#pass')
const btnConfirm = document.querySelector('button')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    if (emailInput.value === ""){
        emailInput.classList.add('red')
        return
    } if (passInput.value === ""){
        passInput.classList.add('red')
        return

    }

    
    const displayEmail = document.querySelector('.user-email')
    const displayPass = document.querySelector('.user-password')
    displayEmail.innerText = emailInput.value
    console.log(passInput.value)
    displayPass.innerText = passInput.value
    const boxAfterLog = document.querySelector('.box-afterLog')
    boxAfterLog.classList.remove('hidden')


})

emailInput.addEventListener('keyup', ()=> 
console.log(emailInput.value)

)
passInput.addEventListener('keyup', ()=> {
    console.log(passInput.value)
})