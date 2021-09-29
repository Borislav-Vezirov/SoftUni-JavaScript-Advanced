function solve() {
    let buttonElement = document.querySelector('.form-control button')

    let inputNameElement = document.querySelector('input[name=lecture-name]')
    let inputDateElement = document.querySelector('input[name=lecture-date]')
    let selectModuleElement = document.querySelector('select[name=lecture-module]')

    let selectTrainingsArea = document.querySelector('.modules');

    
    let lectures = {};

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!inputNameElement.value || !inputDateElement.value || selectModuleElement.value === 'Select module') {
            return;
        }

        if (!lectures[selectModuleElement.value]) {
            
            lectures[selectModuleElement.value] = [];
            createModule();
            createLecture();
        }else{
            createLecture();
        }
    })
    
    function createModule() {
        let createDivModule = document.createElement('div');
        createDivModule.classList.add('module');
        
        let createH3Tag = document.createElement('h3');
        createH3Tag.textContent = (`${selectModuleElement.value}-module`).toUpperCase();
        createDivModule.appendChild(createH3Tag);
        
        return selectTrainingsArea.appendChild(createDivModule);
    }

    function createLecture(){
        
        lectures[selectModuleElement.value].push({
            name: inputNameElement.value,
            date: inputDateElement.value
        });

        let getModule = document.querySelector('.module:last-child')

        let createUlList = document.createElement('ul');
        
        let createLiElement = document.createElement('li');
        createLiElement.classList.add('flex');
        
        let [year, month, day, hour] = inputDateElement.value.split(/[-|T]/g);

        let createH4Element = document.createElement('h4');
        createH4Element.textContent = `${inputNameElement.value} - ${year}/${month}/${day} - ${hour}`
        
        let createDelButton = document.createElement('button');
        createDelButton.classList.add('red');
        createDelButton.textContent = 'Del'
        
        createLiElement.appendChild(createH4Element);
        createLiElement.appendChild(createDelButton);
        createUlList.appendChild(createLiElement);

        let sorted = Object.values(lectures).sort((a, b) => a.date.localeCompare(b.date))

        return getModule.appendChild(createUlList);
    }

};