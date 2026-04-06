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
    constructor() {
        this.employees =[];
    }  
    hire(employee) {
        this.employees.push(employee)
    }
    fire(employee) {
        this.employees.splice(this.employees.indexOf(employee));
    }
    check(employee) {
       for (const stateEmployee of this.employees) {
            if (stateEmployee === employee) {
                return true
            }

       } 
       return false 
       // return this.employees.includes(employee)
    }
}
const company = new Company()
const employee = new Employee("Иван", "программист")
company.hire(employee);
console.log(company.check(employee))
company.fire(employee);
console.log(company.check(employee))

// Создайте класс Cowboy(ковбой), который имеет здоровье,
// количество урона и возможность стрельбы в другого ковбоя.
// Сделайте, чтобы два ковбоя выстрелили друг в друга по очереди.

class Cowboy {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }
    shoot(cowboy) {
        cowboy.health -= this.damage;
    }
}
const cowboy1 = new Cowboy("Ivan", 100, 7);
const cowboy2 = new Cowboy("Ilya", 100, 6);

cowboy1.shoot(cowboy2)
console.log(cowboy2.health)
cowboy2.shoot(cowboy1)
console.log(cowboy1.health)

