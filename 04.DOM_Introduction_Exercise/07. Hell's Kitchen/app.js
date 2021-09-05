function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textAreaElement = document.querySelector('#inputs textarea');
      let textAreaValue   = JSON.parse(textAreaElement.value);
      let bestRestourant  = document.querySelector('#bestRestaurant p');
      let bestWorkers     = document.querySelector('#workers p');
      let collection = {};
      for (let el of textAreaValue) {
         let [restourant, rest] = el.split(' - ');
         let [...elements] = rest.split(/ |, /g).map(x => x = Number(isNaN(x)) ? x : Number(x));
         while (elements.length > 1){
            let name   = elements.shift();
            let salary = elements.shift();

            if(!collection[restourant]){
               collection[restourant] = {names: [], avg: 0, count: 0, bestSalary: 0}
            }
            collection[restourant].names.push({name, salary});
            collection[restourant].avg += salary
            collection[restourant].count ++
            collection[restourant].bestSalary < salary 
            ? collection[restourant].bestSalary = salary 
            :
            collection[restourant].bestSalary; 
         }
      }
      let sorted = Object.entries(collection).sort((a, b) => {
         let avgA = a[1].avg / a[1].count;
         let avgB = b[1].avg / b[1].count;
         return avgB - avgA
      })
      let average = (sorted[0][1].avg / sorted[0][1].count).toFixed(2);
      bestRestourant.innerHTML =  `Name: ${sorted[0][0]} Average Salary: ${average} Best Salary: ${(sorted[0][1].bestSalary).toFixed(2)}`
      Object.entries(sorted[0][1].names).sort((a, b) => b[1].salary - a[1].salary)
      .forEach(x => {
         bestWorkers.innerHTML += `Name: ${x[1].name} With Salary: ${x[1].salary} `
      })
   }
}

