(function solve() {

    String.prototype.ensureStart = function (param) {
        let start = this.startsWith(param);

        return start ? this : param + this;
    }

    String.prototype.ensureEnd = function (param) {
        let end = this.endsWith(param);

        return start ? this : param + this;
    }

})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.ensureEnd('ing');
console.log(str);
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');
