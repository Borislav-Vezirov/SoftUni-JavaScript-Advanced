window.addEventListener('load', solve);

function solve() {
    
    let genrInputEl   = document.querySelector('#genre');
    let nameInputEl   = document.querySelector('#name');
    let authorInputEl = document.querySelector('#author');
    let dateInputEl   = document.querySelector('#date');

    let addButton = document.querySelector('#add-btn');

    addButton.addEventListener('click', addFunc);

    let getHitsContainer = document.querySelector('.all-hits-container');

    let getSavedContainer = document.querySelector('.saved-container');

    let getLikesParagraph = document.querySelector('.likes p');

    function addFunc(e){
        e.preventDefault();

        if(genrInputEl.value == '' || nameInputEl.value == '' || 
           authorInputEl.value == '' || dateInputEl.value == ''){
               return;
           }
        let genreH2   = el('h2', {}, `Genre: ${genrInputEl.value}`);
        let nameH2    = el('h2', {}, `Name: ${nameInputEl.value}`);
        let authorH2  = el('h2', {}, `Author: ${authorInputEl.value}`);
        let dateH3    = el('h3', {}, `Date: ${dateInputEl.value}`);

        let saveButton = el('button', {className: 'save-btn'}, 'Save song');
        let likeButton = el('button', {className: 'like-btn'}, 'Like song');
        let deleteButton = el('button', {className: 'delete-btn'}, 'Delete');

        let createDiv = el('div', {className: 'hits-info'}, el('img', {src: './static/img/img.png'}),
                                                            genreH2, nameH2, authorH2, dateH3, saveButton, likeButton, deleteButton)


        getHitsContainer.appendChild(createDiv);

        deleteButton.addEventListener('click', deleteFunc.bind(null, createDiv));

        likeButton.addEventListener('click', addLike.bind(null, likeButton));

        saveButton.addEventListener('click', addSong.bind(null, createDiv, likeButton, saveButton, deleteButton));

        document.querySelector('form').reset();
    }

    function deleteFunc(div){
        div.remove();
    }

    function addLike(likeButton){

        let regex = /[0-9]+/;

        let match = getLikesParagraph.textContent.match(regex);

        match = Number(match);

        getLikesParagraph.textContent = `Total Likes: ${match + 1}`;

        likeButton.setAttribute("disabled", true);
    }

    function addSong(createDiv,getlikeBut,getsaveBut){

        getlikeBut.remove();
        getsaveBut.remove();

        getSavedContainer.appendChild(createDiv);
    }

    function el(type, attr, ...content){
        
        let element = document.createElement(type);

        for (const key in attr) {
            element[key] = attr[key];
        }

        for (let item of content) {

            if(typeof item == 'string' || typeof item == 'number'){
                item = document.createTextNode(item)
            }
            element.appendChild(item);
        }

        return element;
    }
}