(function solve() {
    
    Array.prototype.last = function(){
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let newArr = this.slice((-n) - 1);
        return newArr;
    }

    Array.prototype.take = function (n) {
        let newArr = this.slice(0, n);
        return newArr;
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => acc + curr,0);
    }

    Array.prototype.average = function () {
        return this.reduce((acc, curr) => acc + curr / this.length ,0);

    }
})();

let arr = [1,2,3,4,6];
console.log(arr.take(2));