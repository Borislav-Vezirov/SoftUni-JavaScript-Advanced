function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let inputText    = inputElement.value;
    let ulList = document.querySelector('#items');

    let createElementLi   = document.createElement('li');
    createElementLi.textContent = inputText;

    let createElementAtag = document.createElement('a');
    createElementAtag.setAttribute('href', '#');
    createElementAtag.textContent = '[Delete]';

    createElementLi.appendChild(createElementAtag) ;
    ulList.appendChild(createElementLi);

    createElementAtag.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })

    inputElement.value = '';
}