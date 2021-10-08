function solve(x1, y1, x2, y2){
    let first  = Math.sqrt(Math.pow(-x1, 2) + Math.pow(-y1, 2));
    let second = Math.sqrt(Math.pow(-x2, 2) + Math.pow(-y2, 2));
    let both   = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
 
    let firstValidation  = 'invalid';
    let secondValidation = 'invalid';
    let bothValidation   = 'invalid';
 
    if(!first.toString().includes('.')){
        firstValidation = 'valid';
    }
    if(!second.toString().includes('.')){
        secondValidation = 'valid';
    }
    if(!both.toString().includes('.')){
        bothValidation = 'valid';
    }
 
    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstValidation}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondValidation}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${bothValidation}`);
}
console.log(solve(3, 0, 0, 4));