class Employee{
    constructor(employeeName, employeeSalary){
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
    }

    annualSalary(){
        console.log(this.employeeSalary*12);
    }
}

// manager another class, inheriting the properties from Employee class
class Manager extends Employee{
    constructor()
}