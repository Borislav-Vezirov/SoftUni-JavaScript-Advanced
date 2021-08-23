function solve(arr, n) {
    let newArr = [];
    arr.filter((x, i) => {
        if (i % n == 0) {
            newArr.push(x)
        }
    })
    return newArr
}
console.log(solve(['1',
        '2',
        '3',
        '4',
        '5'
    ],
    6));