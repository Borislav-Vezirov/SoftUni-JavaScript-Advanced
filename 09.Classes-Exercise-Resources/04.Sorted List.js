class List {
    constructor() {
        this.collection = [];
        this.size = 0
    }

    add(n) {
        this.collection.push(n);
        this.collection.sort((a, b) => a - b);
        this.size++
        return this.collection;
    }
    remove(n) {
        if (n >= 0 && n < this.collection.length) {
            this.collection.splice(n, 1);
            this.collection.sort((a, b) => a - b);
            this.size--
            return this.collection;
        }
    }
    get(n) {
        if (n >= 0 && n < this.collection.length) {
            return this.collection[n];
        }
        
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));