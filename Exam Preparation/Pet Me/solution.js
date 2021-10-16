function solve() {
    
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let addButton     = document.querySelector('#container button');

    let adoptionArea  = document.querySelector('#adoption ul');
    let adoptedArea   = document.querySelector('#adopted ul');

    addButton.addEventListener('click', createElement);


    function createElement(e){
        e.preventDefault();

        let [name, age, kind, owner] = inputElements;
     
        if(name.value.trim() !== '' && !isNaN(age.value.trim()) && 
           age.value.trim() !== '' && kind.value.trim() !== '' && owner.value.trim() !== ''){
            
            let contactButton = el('button', {}, 'Contact with owner');

            const addPet = el('li', {}, 
                                el('p', {},
                                    el('strong', {}, name.value.trim()), ` is a `,
                                    el('strong', {}, age.value.trim()), ` year old `,
                                    el('strong', {}, kind.value.trim())),
                                el('span', {}, `Owner: ${owner.value.trim()}`),
                                contactButton   
                              );

            contactButton.addEventListener('click', contact);       

            adoptionArea.appendChild(addPet); 

            document.querySelector('form').reset();

            function contact(){

                let newName = el('input', {placeholder: "Enter your names"})
                let button  = el('button', {}, 'Yes! I take it!');

                let div = el('div', {}, newName,
                                        button
                            );

                contactButton.remove();

                addPet.appendChild(div);
                
                button.addEventListener('click', adopted.bind(null, newName, addPet));
            }
        }
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

    function adopted(newName, addPet){

        if(newName.value !== ''){

            let checkedButton = el('button', {}, 'Checked');

            addPet.querySelector('div').remove();

            addPet.querySelector('span').textContent = `New Owner: ${newName.value}`
            
            addPet.appendChild(checkedButton);

            adoptedArea.appendChild(addPet);

            checkedButton.addEventListener('click', () => {
                addPet.remove();
            })
        }
    }
}

