const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, salary, department){
        super(name, salary)
        this.department = department
    }

    describe() {
        return `${this.name} manages ${this.department} department and earns ${this.salary}`
    }

}

module.exports = Manager;