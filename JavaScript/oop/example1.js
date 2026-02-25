// const o = {
//     x: 2,
//     test() {
//         console.log(o.x);
//     }
// };

// function f(b) {
//     b.test();
// }

// o.test();
// f(o);



// Создать функцию которая вычисляет стаж от начала трудоустройства


const employee = {
    name: "Ilya",
    firstEmployedYear: 1999,
    getExperience() {
        return new Date().getFullYear() - employee.firstEmployedYear;
    },
}

function doPassRequirements(employee, minExperience) {
    return employee.getExperience() >= minExperience;
}

console.log(doPassRequirements(employee, 27));
