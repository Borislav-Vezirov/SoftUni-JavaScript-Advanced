function validate() {
    let emailElement = document.getElementById('email');
    emailElement.addEventListener('change', () => {
        let emailRegex   = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let isValid      = emailRegex.test(emailElement.value);
        if(isValid){
            emailElement.classList.remove('error')
        }else{
            emailElement.classList.add('error')
        }
    })
}