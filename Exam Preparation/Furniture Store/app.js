window.addEventListener('load', solve);

function solve() {

    let getModelInput = document.getElementById('model');
    let getYearInput = document.getElementById('year');
    let getPriceInput = document.getElementById('price');
    let getDescriptionInput = document.getElementById('description');
    let getButton = document.getElementById('add');

    let getTBody = document.getElementById('furniture-list');

    let getTotalProfit = document.querySelector('.total-price');

    getButton.addEventListener('click', addRow);

    function addRow(e){
        e.preventDefault();

        if(getModelInput.value == '' || getDescriptionInput.value == '' ||
           getYearInput.value == isNaN(Number(getYearInput.value)) || 
           getYearInput.value <= 0 || getPriceInput.value == isNaN(Number(getPriceInput.value)) ||
           getPriceInput.value <= 0) {
               return;
           }

        let moreBtn = el('button', {classList: 'moreBtn'}, 'More Info');

        let buyBtn  = el('button', {classList: 'buyBtn'}, 'Buy it');

        let price = el('td', {}, Number(getPriceInput.value).toFixed(2));

        let createTrInfoEl = el('tr', {classList: 'info'}, el('td', {}, getModelInput.value), 
                                                           price,
                                                           el('td', {}, moreBtn, buyBtn)
                             );

        let descrTd = el('td', {colspan: '3'}, `Description: ${getDescriptionInput.value}`)
        descrTd.setAttribute('colspan', '3');

        let createTrHideEl = el('tr', {classList: 'hide'}, el('td', {}, `Year: ${getYearInput.value}`));
        createTrHideEl.appendChild(descrTd);

        getTBody.appendChild(createTrInfoEl);
        getTBody.appendChild(createTrHideEl);

        moreBtn.addEventListener('click', showInfo.bind(null, moreBtn, createTrHideEl));
        buyBtn.addEventListener('click', buyIt.bind(null, createTrInfoEl, createTrHideEl, price));

        document.querySelector('form').reset();
    }

    function showInfo(moreBtn, createTrHideEl){

        
        if(moreBtn.textContent == 'More Info'){
            moreBtn.textContent = 'Less Info';
            createTrHideEl.style.display = 'contents'
        }else{
            moreBtn.textContent = 'More Info';
            createTrHideEl.style.display = 'none'
        }
    }

    function buyIt(createTrInfoEl, createTrHideEl, price){
        
        if(getTotalProfit.textContent == '0.00'){
            getTotalProfit.textContent = (Number(price.textContent)).toFixed(2);
        }else{
            getTotalProfit.textContent = (Number(getTotalProfit.textContent) + Number(price.textContent)).toFixed(2)
        }

        createTrHideEl.remove();
        createTrInfoEl.remove();
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

