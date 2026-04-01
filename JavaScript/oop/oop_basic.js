// 1. Создайте класс Account(банковский счёт), который будет иметь
// возможность снимать(withdraw) и класть(deposit) деньги на этот счёт.
// Нужно ограничить возможно снятия денег не менее, чем до 0.

// 
class Account {
    constructor(clientID, balance) {
        // this = {}
        this.clientID = clientID;
        this.balance = balance;
        // return this
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Успешно введено: ${amount}`)
    }

    withdraw(amount) {
        this.balance -= amount;
        console.log(`Снято: ${amount}`)
    }
}
function test() {
    return 1
}
const a = test()
const account = new Account("Иван", 25000);
console.log(account.balance);
account.withdraw(1000);
console.log(account.balance);
account.deposit(5000);
console.log(account.balance);


// 2. Создайте класс Employee(работник).
// Создайте класс Company(Компания), который можно попросить
// нанять нового работника, уволить работника, проверить,
// есть ли он в штате компании.

class Employee {
    constructor(name, qualification) {
        this.name = name;
        this.jobTitle = qualification;
    }
}
class Company {
    constructor(employee) {
        this.newEmployees =[];
        this.employee = employee;
    }  
    hire(employee) {

    }
}