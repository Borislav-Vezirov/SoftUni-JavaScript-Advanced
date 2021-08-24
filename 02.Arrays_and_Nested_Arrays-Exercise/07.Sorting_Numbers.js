function solve(arr) {
    arr.sort((a,b) => a - b);
    let result = [];
    while(arr.length > 0){
        let min = arr.shift();
        let max;
        if(arr.length > 1){
            max = arr.pop();
        }else{
            max = arr.shift();
        }
        result.push(min,max); 
    }
       
    return result;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));