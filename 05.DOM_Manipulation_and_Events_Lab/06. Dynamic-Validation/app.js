function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    let inputElement = document.querySelector('#email');
    let text = inputElement.value;
    let match = text.match(pattern);

    inputElement.addEventListener('focus', () => {

        inputElement.addEventListener('blur', (e) => {
            if(text.length !== 0){
                if(!match){
                    inputElement.className = 'error'
                }
            }
        })
    })
}