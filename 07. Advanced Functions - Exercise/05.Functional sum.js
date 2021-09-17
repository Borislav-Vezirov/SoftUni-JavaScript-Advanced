function solve(num) {
    let sum = 0
    function inner(number){
        sum += number;
        return inner
    }

    inner.toString = () => {
        return sum;
    }
    return inner(num);
}
let result = solve(1)(6)(-3)
console.log(result.toString());