class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    raiseSalary(byPercent) {
      const raise = (this.salary * byPercent) / 100;
      this.salary += raise;
    }
  }
  
  module.exports = Employee;