function deleteByEmail() {
    let emails = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));

    let inputElement = document.querySelector('input');

    let result = document.querySelector('#result');

        let searchedEmail = emails.filter(x => x.textContent === inputElement.value)
        if(searchedEmail.length > 0){
            result.textContent = 'Deleted.'
            searchedEmail[0].parentElement.remove();
        }else{
            result.textContent = 'Not found.'
        }
        inputElement.value = '';
}