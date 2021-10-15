(function () {
    String.prototype.ensureStart = function (str) {
        if (this.slice(0, str.length) === str) {
            return this.toString();
        }
 
        return `${str}${this}`
    };
 
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
 
        return `${this}${str}`;
    }
 
    String.prototype.isEmpty = function () {
        return this.toString() === '';
    }
 
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString()
        }
 
        if (this.includes(' ')) {
 
            let words = this.split(' ');
            words.pop()
            while (words.join(' ').length + 3 > n){
                words.pop()
            }
 
 
            let sentance = `${words.join(' ')}...`;
            return sentance;
        }
 
        if(n > 3) {
            let string = `${this.slice(0, n - 3)}...`
            return string
        }
 
 
        return '.'.repeat(n)
    }
 
    String.format = function(string, ...params) {
        let repalceRegex = /{(\d+)}/g;
        let replaced = string.replace(repalceRegex, (match, group1) => {
            let index = Number(group1)
            if(params[index] !== undefined){
                return params[index];
            }
            return match;
        })
        return replaced;
    }
}())

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
