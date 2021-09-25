class Stringer{
    constructor(str, length){
        this.innerString  = str;
        this.innerLength  = length;
    }
    increase(length){
        this.innerLength += length;
        return this.innerLength
    }
    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
        return this.innerLength
    }
    toString(){
        let temp = this.innerString;
        if(this.innerLength == 0){
            return '...';
        }
        if(this.innerString.length > this.innerLength){
            let count =  temp.length - this.innerLength;
            temp = temp.slice(0, count);
            return temp + '...';
        }
        return temp
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
