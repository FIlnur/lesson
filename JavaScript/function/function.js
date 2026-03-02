// 1. напиши функцию, которая не принимает аргументов и просто возвращает текстовую строку с приветствием

// function doWelcome() {
//     return "Hello"
// };
// console.log(doWelcome());


// 2. напиши функцию, которая принимает имя пользователя и возвращает новую строку с персональным приветствием

function getUserWelcome(userName) {
    return `Hello, ${userName}`
};
console.log(getUserWelcome("Ilnur"));


//  3. Напиши функцию, которая принимает текущий год и год рождения, а затем вычисляет и возвращает возраст.

function age(currentYear, birthYear) {
    return currentYear - birthYear;
}
console.log(age(2026, 1989));


// 4. Напиши функцию, которая принимает два числа и возвращает результат вычитания второго из первого.

function substract(number1, number2) {
    return number1 - number2;
}
console.log(substract(20, 13));


// 5. Напиши функцию, которая принимает одно число, умножает его само на себя и возвращает этот результат.

function square(number) {
    return number*number;
}
console.log(square(5));


// 6. Напиши функцию, которая принимает отдельные строки с именем и фамилией, а возвращает их склеенными в одну строку через пробел.

function getFullName(name, surname) {
    return `${name} ${surname}`;
}
console.log(getFullName("Ilnur", "Faridonov"));


// 7. Напиши функцию, которая принимает любое логическое значение и возвращает строго противоположное ему.

function invert(value) {
    return !value;
}
console.log(invert(true));