class Company{

    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){

        this.checkForErrors(name, salary, position, department);

        if(this.departments[department] === undefined){
            this.departments[department] = [];
        }
        
        this.departments[department].push({name, salary, position, department});

        return `New employee is hired. Name: ${name}. Position: ${position}`; 
    }

    bestDepartment(){
        let sortedDeprt = Object.values(this.departments).sort((a, b) => {
            let avgA = a.reduce((acc, el) =>  acc + el.salary, 0) / a.length;
            let avgB = b.reduce((acc, el) =>  acc + el.salary, 0) / b.length;

            return avgB - avgA
        })

        let result = [];

        result.push(`Best Department is: ${sortedDeprt[0][0].department}`);
        let bestAvgSalary = sortedDeprt[0].reduce((acc, el) => acc + el.salary, 0) / sortedDeprt[0].length;
        result.push(`Average salary: ${bestAvgSalary}`);


        Object.entries(sortedDeprt[0]).sort((a, b) => {
            return b[1].salary - a[1].salary || a[1].name.localeCompare(b[1].name);
        }).forEach(x => {
            result.push(`${x[1].name} ${x[1].salary} ${x[1].position}`); 
        })
        
        return result.join('\n');
    }

    checkForErrors(name, salary, position, department){
        if(name === undefined || name === '' || name === null ||
           salary === undefined || salary === '' || salary === null || salary < 0 ||
           position === undefined || position === '' || position === null ||
           department === undefined || department === '' || department === null){

            throw new Error('Invalid input!')
        }
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
