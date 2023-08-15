const firstName = document.querySelector("#first_name")
const lastName = document.querySelector("#last_name")
const email = document.querySelector("#email")
const phoneNumber = document.querySelector("#phone_number")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm_password")
const submitBtn = document.querySelector("#submit_button")

let firstNameValidation = false;
let lastNameValidation = false;
let emailValidation = false;
let passwordValidation = false;

firstName.addEventListener("keyup", checkFirstName)
lastName.addEventListener("keyup", checkLastName)
email.addEventListener("keyup", checkEmail)
// phoneNumber.addEventListener("keyup", checkPhoneNumber)
confirmPassword.addEventListener("keyup", comparePasswords)
submitBtn.addEventListener("click", checkInputs)

function comparePasswords() {
    if (password.value != confirmPassword.value) {
        changeToRed(confirmPassword)
    }
    else {
        changeToGreen(confirmPassword)
        changeToGreen(password)
        passwordValidation = true;
    }
}

function checkFirstName() {
    if (/^[a-zA-Z]+$/.test(firstName.value)) {
        firstNameValidation = true;
        changeToGreen(firstName)
    }
    else {        
        changeToRed(firstName)
    }    
}

function checkLastName() {
    if (/^[a-zA-Z]+$/.test(lastName.value)) {
        lastNameValidation = true;
        changeToGreen(lastName)
    }
    else {        
        changeToRed(lastName)
    }    
}

function checkEmail() {
    if (email.value.includes("@") && email.value.includes(".")) {
        emailValidation = true;
        changeToGreen(email)
    }
    else {        
        changeToRed(email)
    }    
}

function changeToRed(button_type) {
    button_type.style.backgroundColor = "rgb(254, 216, 222)";
    button_type.style.borderColor = "lightpink";
}

function changeToGreen(button_type) {
    button_type.style.backgroundColor = "white";
    button_type.style.borderColor = "rgb(232,242,231)";
}

function checkInputs() {
    if (firstNameValidation == false) {
        changeToRed(firstName)
    }

    if (lastNameValidation == false) {
        changeToRed(lastName)
    }

    if (emailValidation == false) {
        changeToRed(email)    
    }

    if (passwordValidation == false) {
        changeToRed(password)
        changeToRed(confirmPassword)
    }
}