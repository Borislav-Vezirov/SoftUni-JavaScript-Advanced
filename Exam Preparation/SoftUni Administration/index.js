function solve() {

    let [getLectureNameEl, getDateEl] = Array.from(document.querySelectorAll('input'));

    let getSelectModuleEl = document.querySelector('select');

    let submitButton = document.querySelector('.form-control button');

    let getTrainingsModulesEl = document.querySelector('.modules');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(getLectureNameEl.value !== '' &&
           getDateEl.value !== '' &&
           getSelectModuleEl.value !== 'Select module'){

                let getExistingModules = Array.from(getTrainingsModulesEl.querySelectorAll('h3'));

                let isModuleExist = getExistingModules
                .find(x => x.textContent === `${(getSelectModuleEl.value).toUpperCase()}-MODULE`);

                let createDiv;
                let createH3Tag;
                let createUlElement;

                if(!isModuleExist){

                    createDiv = document.createElement('div');
                    createDiv.className = 'module';
    
                    createH3Tag = document.createElement('h3');
                    createH3Tag.textContent = `${(getSelectModuleEl.value).toUpperCase()}-MODULE`;

                    createUlElement = document.createElement('ul');

                    //createLecture();
                    createDiv.appendChild(createH3Tag);
                    createDiv.appendChild(createUlElement);
                    createUlElement.appendChild(createLecture());

                    getTrainingsModulesEl.appendChild(createDiv);

                }else{
                    let getModules = isModuleExist.parentElement;
                    let getUi = isModuleExist.nextElementSibling;

                    getUi.appendChild(createLecture());

                    let getH4Elements = Array.from(getModules.querySelectorAll('h4'));
                    sort(getH4Elements);
                    
                    let getLiElements = Array.from(getModules.querySelectorAll('li'));
                    for (const li of getLiElements) {
                        li.prepend(getH4Elements.shift());
                    }
                }
           }
    })

    function createLecture(){

        let createLiElement = document.createElement('li');
        createLiElement.className = 'flex';

        let createH4Element = document.createElement('h4');
        
        createH4Element.textContent = `${getLectureNameEl.value} - ${refactorDate(getDateEl.value)}`;

        let createDelButton = document.createElement('button');
        createDelButton.className   = 'red';
        createDelButton.textContent = 'Del';

        createDelButton.addEventListener('click', deleteFunction)

        createLiElement.appendChild(createH4Element);
        createLiElement.appendChild(createDelButton);
        
        return createLiElement;
    }

    function deleteFunction(e){

        let getLiList = e.target.parentElement;
        let getUlList = e.target.parentElement.parentElement;
        let getModule = e.target.parentElement.parentElement.parentElement;

        getLiList.remove();

        if(getUlList.children.length === 0){
            getModule.remove();
        }
    }

    function sort(arr){

        arr.sort((a, b) => {
            let first  = a.textContent.split(/^[\w]+ - /);
            let second = b.textContent.split(/^[\w]+ - /);

            return first[1].localeCompare(second[1]);
        })
        return arr
    }

    function refactorDate(value){

        let result = value
        .split('-')
        .join('/')
        .split('T')
        .join(' - ');
        
        return result
    }
};