const submitBtn = document.querySelector('input[type=submit]');
const inputEmail = document.querySelector('input[type=email]');
const errorEmail = document.querySelector('.error-email');

function submitEmail(e) {
    console.log(inputEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) == null)
    if(inputEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) == null) {
        inputEmail.classList.add('error')
        errorEmail.classList.remove('hide');
        e.preventDefault();
    }
}

submitBtn.addEventListener('click', submitEmail)