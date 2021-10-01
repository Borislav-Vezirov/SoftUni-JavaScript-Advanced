window.addEventListener('load', solution)

function solution() {
  
    let fullNameElement    = document.querySelector('#fname');
    let emailElement       = document.querySelector('#email');
    let phoneElement       = document.querySelector('#phone');
    let addressElement     = document.querySelector('#address');
    let postalCodeElement  = document.querySelector('#code');
    
    let buttonElement = document.querySelector('#submitBTN');
    
    let getUlList = document.querySelector('#infoPreview');

    let getEditButton     = document.querySelector('#editBTN');
    let getContinueButton = document.querySelector('#continueBTN');

    let blockContainer = document.querySelector('#block');

    buttonElement.addEventListener('click', () => {
      
        if(fullNameElement.value == '' || emailElement.value == ''){
          return;
        }

        let createNameLiElement = document.createElement('li');
        createNameLiElement.textContent = `Full Name: ${fullNameElement.value}`;

        let createEmailLiElement = document.createElement('li');
        createEmailLiElement.textContent = `Email: ${emailElement.value}`;

        let createPhoneLiElement = document.createElement('li');
        createPhoneLiElement.textContent = `Phone Number: ${phoneElement.value}`;

        let createAddressLiElement = document.createElement('li');
        createAddressLiElement.textContent = `Address: ${addressElement.value}`;

        let createPostalCodeLiElement = document.createElement('li');
        createPostalCodeLiElement.textContent = `Postal Code: ${postalCodeElement.value}`;

        getUlList.appendChild(createNameLiElement);
        getUlList.appendChild(createEmailLiElement);
        getUlList.appendChild(createPhoneLiElement);
        getUlList.appendChild(createAddressLiElement);
        getUlList.appendChild(createPostalCodeLiElement);

        buttonElement.setAttribute("disabled", true);

        fullNameElement.value    = '';
        emailElement.value       = '';
        phoneElement.value       = '';
        addressElement.value     = '';
        postalCodeElement.value  = '';

        getEditButton.removeAttribute('disabled');
        getContinueButton.removeAttribute('disabled');
    });

    getEditButton.addEventListener('click', () => {

        let selectAllLi = Array.from(document.querySelectorAll('#infoPreview li'));

        selectAllLi = selectAllLi.map(x => x.textContent.split(/[A-Za-z]+[ ]*[A-Za-z]+: /g));
        
        fullNameElement.value   = selectAllLi[0][1]
        emailElement.value      = selectAllLi[1][1]
        phoneElement.value      = selectAllLi[2][1]
        addressElement.value    = selectAllLi[3][1]
        postalCodeElement.value = selectAllLi[4][1]

        getUlList.textContent = '';

        getEditButton.setAttribute('disabled', true);
        getContinueButton.setAttribute('disabled', true);
        buttonElement.removeAttribute('disabled');
    })

    getContinueButton.addEventListener('click', () => {

        let createH3Element = document.createElement('h3');
        createH3Element.textContent = 'Thank you for your reservation!';

        blockContainer.textContent = '';
        blockContainer.appendChild(createH3Element);
    })
}
