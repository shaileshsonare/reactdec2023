class Bank {
    constructor(bal) {
        this.balance = bal
    }

    showBal() {
        console.log("Available bal " + this.balance)
    }

    deposit(amt) {
        this.balance = this.balance + amt
    }
}

class SBIBank extends Bank {
    deposit(amt) {
        this.balance = this.balance + (amt - 50)
    }
}

b = new Bank(1000)
b.showBal()
b.deposit(500)
b.showBal()




















// function Employee(id, nm, sal) {

//     this.showDetails = () => {
//         console.log("I am from employee details")
//     }

// }
/*
class Employee {

    constructor(id, nm, sal) {
        this.empid = id
        this.name = nm
        this.salary = sal
    }

    showDetails() {
        console.log(`Empid: ${this.empid}\t Name: ${this.name}\t Sal: ${this.salary}`)
    }
}

var eobj = new Employee(1, "Sunny", 50000)
eobj.showDetails()

var eobj2 = new Employee(2, "Sanjana", 55000)
eobj2.showDetails()

*/
