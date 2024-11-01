
const redBorder = `1px solid red`;
const blueBorder = `1px solid blue`;

function passwordMatchCheck(pass, confirm) {
    return pass === confirm ;
}

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.querySelectorAll('input[type = "password"]')[0];
    const confirmPasswordInput = document.querySelectorAll('input[type = "password"]')[1];
    const submitBtn = document.querySelector('button.create-account');

    confirmPasswordInput.addEventListener('keyup', () => {
        console.log(confirmPasswordInput.value, passwordInput.value)
        if(confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordInput.style.border = redBorder;
        } else if(confirmPasswordInput.validity.valid) {
            confirmPasswordInput.style.border = blueBorder;
        }
    })

    submitBtn.addEventListener('click', e => {
        if(passwordInput.value !== confirmPasswordInput.value) {
            e.preventDefault();
            alert('password do not match');
        }
    })
});