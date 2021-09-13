function addItem() {
    let selectElement     = document.querySelector('#menu');
    let inputTextElement  = document.querySelector('#newItemText');
    let inputValueElement = document.querySelector('#newItemValue');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = inputTextElement.value;
    newOptionElement.setAttribute('value', inputValueElement.value);
    selectElement.appendChild(newOptionElement);
    inputTextElement.value  = ''
    inputValueElement.value = ''
}