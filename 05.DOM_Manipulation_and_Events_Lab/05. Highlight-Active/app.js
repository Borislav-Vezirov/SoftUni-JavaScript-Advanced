function focused() {
    let inputs = Array.from(document.querySelectorAll('input'));
    for (const input of inputs) {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.className = 'focused'
        })

        input.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused')
        })
    }
}