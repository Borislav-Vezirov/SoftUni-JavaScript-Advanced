function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    
    for (const button of buttons) {
        button.addEventListener('click', (e) => {
            let parentElement  = e.target.parentElement;
            let getRadioButton = parentElement.querySelector('input[type=radio]:checked');
            if(getRadioButton.value === 'unlock'){
                let hiddenField = parentElement.querySelector('div');
                hiddenField.style.display = hiddenField.style.display === 'block' 
                ? 'none' 
                : 'block' 
                button.textContent = button.textContent === 'Show more' ? 'Hide it' : 'Show more'
            }
        })
    }
}