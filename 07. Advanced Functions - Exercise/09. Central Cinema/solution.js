function solve() {
    let inputElements  = Array.from(document.querySelectorAll('#container input'))
    let onScreenButton = document.querySelector('#container button');
    let ulElement      = document.querySelector('#movies ul');
    
    onScreenButton.addEventListener('click', addMovieOnScreen);

    function addMovieOnScreen(e){
        e.preventDefault();
        
        let name  = inputElements[0].value;
        let hall  = inputElements[1].value;
        let price = inputElements[2].value;
        
        if(name !== '' && hall !== '' && price !== '' && !isNaN((Number(price)))){
            
            let createLiElement     = document.createElement('li');
            let createSpanElement   = document.createElement('span');
            let createStrongElement = document.createElement('strong');
            let createDivElement    = document.createElement('div');
            let createSecondStrongElement = document.createElement('strong');
            let createInputElement  = document.createElement('input');
            createInputElement.placeholder = 'Tickets Sold';
            let createButtonElement = document.createElement('button');

            price = Number(price).toFixed(2);

            createSecondStrongElement.textContent = price;
            createStrongElement.textContent       = `Hall: ${hall}`;
            createSpanElement.textContent         = name;

            createButtonElement.textContent       = 'Archive';
            createButtonElement.addEventListener('click', archiveMovie);

            createDivElement.appendChild(createSecondStrongElement);
            createDivElement.appendChild(createInputElement);
            createDivElement.appendChild(createButtonElement);

            createLiElement.appendChild(createSpanElement);
            createLiElement.appendChild(createStrongElement);
            createLiElement.appendChild(createDivElement);

            ulElement.appendChild(createLiElement);
        }

        inputElements.map(x => x.value = '');
    }

    function archiveMovie(e){
        let liElement     = e.target.parentElement.parentElement;
        let inputElement  = liElement.querySelector('div input')
        let inputNumber   = inputElement.value;
        let archiveUl     = document.querySelector('#archive ul');

        if(inputElement.value !== '' && !isNaN(Number(inputNumber))){
            let spanElement   = liElement.querySelector('span');
            let strongElement = liElement.querySelector('div strong');
            strongElement.textContent = `Total amount: ${(strongElement.value * inputNumber).toFixed(2)}` 
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";

            liElement.appendChild(deleteButton);
            archiveUl.appendChild(liElement);
        }

        
    }
}