function solve() {
    
    let inputName = document.querySelector('#task');
    let inputDesc = document.querySelector('#description');
    let inputDate = document.querySelector('#date');

    let submitButton = document.querySelector('#add');

    let [ , openSection, progressSection, completeSection] = Array.from(document.querySelectorAll('section'))

    submitButton.addEventListener('click', newArticle);

    function newArticle(e){
        e.preventDefault();

        if(inputName.value !== '' && inputDate.value !== '' && inputDesc.value !== ''){

            let startButton  = el('button', {className: 'green'}, 'Start');
            let deleteButton = el('button', {className: 'red'}, 'Delete');

            let element = el('article', {}, el('h3', {}, inputName.value),
                                            el('p', {}, `Description: ${inputDesc.value}`),
                                            el('p', {}, `Due Date: ${inputDate.value}`),
                                            el('div', {classList: 'flex'}, startButton,
                                                                           deleteButton)
                            );

            openSection.children[1].appendChild(element);

            startButton.addEventListener('click', startFunc.bind(null, element));
            deleteButton.addEventListener('click', deleteFunc.bind(null, element));

            document.querySelector('form').reset();
        }
    }

    function startFunc(article){

        article.querySelector('.green').remove();

        let createFinishButton = el('button', {className: 'orange'}, 'Finish');

        article.querySelector('div').appendChild(createFinishButton);

        progressSection.children[1].appendChild(article);

        createFinishButton.addEventListener('click', completeFunc.bind(null, article))
    }

    function completeFunc(article){

        article.querySelector('div').remove();

        completeSection.children[1].appendChild(article);
    }

    function deleteFunc(article){
        article.remove();
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