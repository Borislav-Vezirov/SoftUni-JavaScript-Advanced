function solve(arr) {
    let min = Number.MIN_SAFE_INTEGER;
    let result = arr.reduce((acc, curr) => {
        if(curr >= min){
            min = curr;
            acc.push(curr);
        }
        return acc;
    }, [])
    return result
}
console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));