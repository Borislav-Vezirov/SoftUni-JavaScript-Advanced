function solve(arr, n) {
    n = n % arr.length;
    for (let i = 0; i < n; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }
    return arr.join(' ')
}
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));