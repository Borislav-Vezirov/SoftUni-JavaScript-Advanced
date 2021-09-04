function toggle() {
    let button  = document.querySelector('.button').textContent;
    let content = document.getElementById('extra');
    
    if(button == 'More'){
        content.style.display = 'block'
        document.querySelector('.button').textContent = 'Less'
    }else{
        content.style.display = 'none'
        document.querySelector('.button').textContent = 'More'
    }
}