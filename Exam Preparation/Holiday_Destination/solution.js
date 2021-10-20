function addDestination() {

    let [cityInput, countryInput] = Array.from(document.querySelectorAll('#input input'));

    let selectInput = document.querySelector('select');

    let destinationTable = document.querySelector('#destinationsList');

    let summaryBox = Array.from(document.querySelectorAll('#summaryBox input'));

    if(cityInput.value == '' || countryInput.value == ''){
        console.log('yes');
        return;
    }

    let createTrEl = el('tr', {});

    let createDestTdEl = el('td', {}, `${cityInput.value}, ${countryInput.value}`);

    let selectValue = selectInput.value[0].toUpperCase() + selectInput.value.slice(1);
    
    let createSeasonTdEl = el('td', {}, selectValue);

    createTrEl.appendChild(createDestTdEl);
    createTrEl.appendChild(createSeasonTdEl);

    destinationTable.appendChild(createTrEl);

    if(selectValue.toLowerCase() == 'summer'){
        summaryBox[0].value ++;
    }else if(selectValue.toLowerCase() == 'autumn'){
        summaryBox[1].value ++;
    }else if(selectValue.toLowerCase() == 'winter'){
        summaryBox[2].value ++;
    }else{
        summaryBox[3].value ++;
    }

    cityInput.value = '';
    countryInput.value = '';
    
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