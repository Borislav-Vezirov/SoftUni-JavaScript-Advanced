function solve() {

  let buttons        = document.querySelectorAll('button');
  let generateButton = buttons[0];
  let buyButton      = buttons[1];
  let resultArea     = Array.from(document.querySelectorAll('textarea'))[1];
  
  generateButton.addEventListener('click', genarateInput);

  buyButton.addEventListener('click', generateSelectedItems);

  function genarateInput(){

    let textAreaValue = JSON.parse(document.querySelector('#exercise textarea').value);
    let tableElement  = document.querySelector('table tbody');
    
    for (const el of textAreaValue) {

        let createRow      = document.createElement('tr');

        let createTdImg    = document.createElement('td');
        let createImgEl    = document.createElement('img');
        createImgEl.src = el.img;
        createTdImg.appendChild(createImgEl);

        let createTdName   = document.createElement('td');
        let createPtag     = document.createElement('p');
        createPtag.textContent  = el.name;
        createTdName.appendChild(createPtag);

        let createTdPrice   = document.createElement('td');
        let createPtagPrice = document.createElement('p');
        createPtagPrice.textContent = Number(el.price);
        createTdPrice.appendChild(createPtagPrice);

        let createTdDefac  = document.createElement('td');
        let createPtagDef = document.createElement('p');
        createPtagDef.textContent = Number(el.decFactor)
        createTdDefac.appendChild(createPtagDef);

        let createTdCheckb = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        createTdCheckb.appendChild(checkbox);

        createRow.appendChild(createTdImg);
        createRow.appendChild(createTdName);
        createRow.appendChild(createTdPrice);
        createRow.appendChild(createTdDefac);
        createRow.appendChild(createTdCheckb);

        tableElement.appendChild(createRow);
    }
  }

  function generateSelectedItems(){
    let items = Array.from(document.querySelectorAll('tbody tr'));
    let filteredItems = items.filter(x => x.querySelectorAll('input:checked').length > 0);

    let names = filteredItems.map(x => x.querySelector('td:nth-child(2) p').textContent);

    let price = filteredItems.map(x => x.querySelector('td:nth-child(3) p'))
    .map(x => Number(x.textContent));

    let defactor = filteredItems.map(x => x.querySelector('td:nth-child(4) p'))
    .map(x => Number(x.textContent));

    let sumPrice    = price.reduce((acc, el) => acc + el, 0);
    let sumDefactor = defactor.reduce((acc, el) => acc + el, 0) / defactor.length;

    resultArea.textContent = `Bought furniture: ${names.join(', ')}\nTotal price: ${sumPrice.toFixed(2)}\nAverage decoration factor: ${sumDefactor}`;
  }
  
}