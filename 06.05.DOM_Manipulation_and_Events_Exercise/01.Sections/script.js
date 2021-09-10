function create(words) {
    for (const word of words) {
        let content    = document.querySelector('#content');
        let divElement = document.createElement('div');
        let pElement   = document.createElement('p');
        pElement.textContent   = word;
        pElement.style.display = 'none';
        divElement.appendChild(pElement);
        content.appendChild(divElement);
        divElement.addEventListener('click', showText);
    }

    function showText(e){
        let showParagraph = e.target.children[0];
        showParagraph.style.display = 'block';
    }
}