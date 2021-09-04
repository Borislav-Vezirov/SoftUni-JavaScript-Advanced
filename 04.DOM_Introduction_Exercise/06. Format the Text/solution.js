function solve() {
    let content = document.querySelector('#input')
    let splitted = content.value.split('.').map(x => x + '.').filter(x => x.length > 1);
    while(splitted.length > 0){
      let pararaph = splitted.splice(0, 3);
      document.getElementById('output').innerHTML += `<p>${pararaph.join('')}</p>`
    }
}