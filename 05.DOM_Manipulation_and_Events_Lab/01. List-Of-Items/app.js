function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let inputText = inputElement.value;
    let list = document.querySelector('ul');

    let createdeElementli = document.createElement('li');
    createdeElementli.textContent = inputText;
    list.appendChild(createdeElementli);
    inputElement.value = '';
}