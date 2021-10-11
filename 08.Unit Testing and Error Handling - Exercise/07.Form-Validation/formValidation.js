function validate() {
    
    let getUserNameEl    = document.querySelector('#username');
    let getEmailEl       = document.querySelector('#email');
    let getPasswordEl    = document.querySelector('#password');
    let getConfirmPassEl = document.querySelector('#confirm-password');

    let getCompanyCheckBox = document.querySelector('#company').addEventListener('change', isCompany)

    let getSubmitButton  = document.querySelector('#submit');

    getSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(validateUserName(getUserNameEl.value) &&
           validatePassword(getPasswordEl.value, getConfirmPassEl.value) &&
           validateEmail(getEmailEl.value)){
            console.log('yes');
        }
    });

    function validateUserName(userName){
        let regexPattern = /^[A-Za-z0-9]{3,20}$/;
        if(regexPattern.test(userName)){
            return true;
        }
    }

    function validatePassword(pass, confirmPass){
        let regexPattern = /^[A-Za-z0-9_]{5,15}$/;
        if(regexPattern.test(pass) && pass === confirmPass){
            return true;
        }
    }

    function validateEmail(email){
        let regexPattern = /.*@.*\..*/;
        if(regexPattern.test(email)){
            return true;
        }
    }

    function isCompany(e){
        let hiddenField = document.querySelector('#companyInfo');
        hiddenField.style.display = e.target.checked ? 'block' : 'none';
    }
}
