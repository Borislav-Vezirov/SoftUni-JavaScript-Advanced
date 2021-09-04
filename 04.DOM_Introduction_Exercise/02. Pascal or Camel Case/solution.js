function solve() {
  let inputValue    = document.getElementById('text').value;
  let typeToConvert = document.getElementById('naming-convention').value;
  let result = ''
  
  if(typeToConvert == 'Camel Case'){
    let arrOfInputValue = inputValue.split(' ').map(x => x.toLowerCase());
    result += arrOfInputValue.shift();
    for (let word of arrOfInputValue) {
      let firstChar = word[0].toUpperCase();
      let rest = word.slice(1);
      result += firstChar + rest  
    }
  }else if(typeToConvert == 'Pascal Case'){
    let arrOfInputValue = inputValue.split(' ').map(x => x.toLowerCase());
    for (let word of arrOfInputValue) {
      let firstChar = word[0].toUpperCase();
      let rest = word.slice(1);
      result += firstChar + rest  
    }
  }else{
    result = 'Error!'
  }
  
  document.getElementById('result').textContent = result;
}