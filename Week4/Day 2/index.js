// Import the Employee class from Employee.js
const Employee = require("./Employee.js");

const Manager = require("./Manager.js")

// Create a new Employee instance named Jess with a salary of 45,000
const firstEmployee = new Employee("Jess", 45000);
// console.log(firstEmployee.salary); // Output: 45000

firstEmployee.raiseSalary(10); // 10% raise
// console.log(firstEmployee.salary); // Output: 49500


//Create a new manager instance 
const manager1 = new Manager("Sam", 55000, "Engineering")
// console.log(manager1.name)
// console.log(manager1.describe())

// //Access the parent methods
// manager1.raiseSalary(5)
// console.log("Manager salary after raise:", manager1.salary)

const manager2 = new Manager ("Sarah", 60000, "Finance")
console.log(manager2.describe())
manager2.raiseSalary(5)
console.log("Manager salary after raise:", manager2.salary)

