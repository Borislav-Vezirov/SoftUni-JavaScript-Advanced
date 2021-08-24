function solve(arr) {
    let magicNum = 0
    let isMagic = true;
    for (let row = 0; row < arr.length; row++) {
        let sum = arr[row].reduce((acc, curr) => acc + curr ,0)
        if(magicNum === 0){
            magicNum = sum
        }
        if(magicNum !== sum){
            isMagic = false
        }
    }

    for (let col = 0; col < arr[0].length; col++) {
        let sum = 0
        for (let row = 0; row < arr.length; row++) {
            sum += arr[row][col]
        }
        if(sum !== magicNum){
            isMagic = false
        }
    }
    return isMagic
}
console.log(solve([[4, 5, 6],
                   [6, 5, 4],
                   [5, 5, 5]] ));
