function solve(arr) {
    let result = [];
    arr.map((x, i) => {
        if(x === 'add'){
            result[i] = i + 1;
        }else if( x === 'remove'){
            result.pop();
        }
        return result;
    })
    result = result.filter(x => x);

    if (result.length <= 0) {
        return 'Empty';
    }else {
        return result.join('\n');
    }
}
console.log(solve(['add',
    'remove',
    'remove',
    'remove',
    'remove'
]));