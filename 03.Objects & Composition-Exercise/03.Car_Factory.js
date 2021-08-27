function solve(obj) {
   
    function engine(n){
        let engine = {};
        if(n <= 90){
            engine = { power: 90, volume: 1800};
        }else if( n <= 120){
            engine = { power: 120, volume: 2400};
        }else{
            engine = { power: 200, volume: 3500};
        }
        return engine;
    }

    function carriage(type, color){
        let result = {type, color}
        return result
    }

    function wheels(n){
        result = [];
        if(n % 2 === 0){
            n -= 1;
        }
        result.push(n,n,n,n);
        return result
    }
    return {
        model: obj.model,
        engine: engine(obj.power),
        carriage: carriage(obj.carriage, obj.color),
        wheels: wheels(obj.wheelsize)
    }
}
console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));