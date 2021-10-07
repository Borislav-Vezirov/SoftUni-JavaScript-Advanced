window.addEventListener('load', solve);

function solve() {

    let getModelInput = document.getElementById('model');
    let getYearInput = document.getElementById('year');
    let getPriceInput = document.getElementById('price');
    let getDescriptionInput = document.getElementById('description');
    let getButton = document.getElementById('add');

    let getTBody = document.getElementById('furniture-list');

    let getTotalProfit = document.querySelector('.total-price');

    getButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (getModelInput.value !== '' && getDescriptionInput.value !== '' &&
            getYearInput.value > 0 && getPriceInput.value > 0) {

            //--------------------Create Info Row------------------------------------------------------------
            let createInfoRow = document.createElement('tr');
            createInfoRow.classList.add('info');

            let createModelTd = document.createElement('td');
            createModelTd.textContent = getModelInput.value;

            let createPriceTd = document.createElement('td');
            createPriceTd.textContent = (Number(getPriceInput.value)).toFixed(2);

            let createButtonTd = document.createElement('td');

            let createMoreBtn = document.createElement('button');
            createMoreBtn.classList.add('moreBtn')
            createMoreBtn.textContent = 'More Info'

            createMoreBtn.addEventListener('click', moreInfoFunc)

            let createBuyBtn = document.createElement('button');
            createBuyBtn.classList.add('buyBtn');
            createBuyBtn.textContent = 'Buy It';

            createBuyBtn.addEventListener('click', buyItFunc)

            createButtonTd.appendChild(createMoreBtn);
            createButtonTd.appendChild(createBuyBtn);

            createInfoRow.appendChild(createModelTd);
            createInfoRow.appendChild(createPriceTd);
            createInfoRow.appendChild(createButtonTd);
            //-------------------------Create Hided Info---------------------------------------------------
            let createHideRow = document.createElement('tr');
            createHideRow.classList.add('hide');

            let createYearTd = document.createElement('td');
            createYearTd.textContent = `Year: ${getYearInput.value}`;

            let createDescrTd = document.createElement('td');
            createDescrTd.setAttribute('colspan', '3');
            createDescrTd.textContent = `Description: ${getDescriptionInput.value}`;

            createHideRow.appendChild(createYearTd);
            createHideRow.appendChild(createDescrTd);
            //--------------------Add Rows To TBody---------------------------------------------------------

            getTBody.appendChild(createInfoRow);
            getTBody.appendChild(createHideRow);

            getModelInput.value = ''
            getYearInput.value = ''
            getPriceInput.value = ''
            getDescriptionInput.value = ''
        }

        function moreInfoFunc(e) {

            let getInfoButton = e.target;

            let getHidenTr = e.target.parentElement.parentElement.nextElementSibling

            if (getInfoButton.textContent === 'More Info') {
                getInfoButton.textContent = 'Less Info'
                getHidenTr.style.display = 'contents';

            } else {
                getInfoButton.textContent = 'More Info'
                getHidenTr.style.display = 'none';
            }
        }

        function buyItFunc(e) {

            let getPrice = e.currentTarget.parentElement.parentElement.children[1];

            if (getTotalProfit.textContent == 0.00) {
                getTotalProfit.textContent = (Number(getPrice.textContent)).toFixed(2);
            } else {
                getTotalProfit.textContent = (Number(getTotalProfit.textContent) + Number(getPrice.textContent)).toFixed(2);
            }
            e.currentTarget.parentElement.parentElement.remove();
        }
    })
}

