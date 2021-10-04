function solution() {

    let getInputElement = document.querySelector('input[placeholder="Gift name"]')
    let getAddButton = document.querySelectorAll('button')[0];

    let ulElementInListGifts    = document.querySelectorAll('ul')[0];
    let ulElementInSentGifts    = document.querySelectorAll('ul')[1];
    let ulElementInDiscardGifts = document.querySelectorAll('ul')[2];

    getAddButton.addEventListener('click', () => {
        
        let createLiElement = document.createElement('li');
        createLiElement.className = 'gift';
        createLiElement.textContent = getInputElement.value;

        let sendButton  = document.createElement('button');
        sendButton.setAttribute('id', 'sendButton');
        sendButton.textContent = 'Send';
        createLiElement.appendChild(sendButton);

        sendButton.addEventListener('click', sendFunction);

        let discardButton = document.createElement('button');
        discardButton.setAttribute('id', 'discardButton');
        discardButton.textContent = 'Discard'
        createLiElement.appendChild(discardButton);

        discardButton.addEventListener('click', discardFunction);

        ulElementInListGifts.appendChild(createLiElement);

        let getAllLi = Array.from(ulElementInListGifts.querySelectorAll('li'));
        getAllLi
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(x => ulElementInListGifts.appendChild(x));

        getInputElement.value = '';
    });

    function sendFunction(e){
        let createLiElementForSentGifts = document.createElement('li');
        createLiElementForSentGifts.textContent = e.target.parentElement.firstChild.textContent;
        e.target.parentElement.remove();
        ulElementInSentGifts.appendChild(createLiElementForSentGifts);
    }

    function discardFunction(e){
        let createLiElementForDiscardGifts = document.createElement('li');
        createLiElementForDiscardGifts.textContent = e.target.parentElement.firstChild.textContent;
        e.target.parentElement.remove();
        ulElementInDiscardGifts.appendChild(createLiElementForDiscardGifts);
    }
}