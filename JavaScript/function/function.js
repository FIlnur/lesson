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

// 8. Напиши функцию, которая принимает число и через условие возвращает истину, если оно больше нуля, и ложь в противном случае.

function isPositive(number) {
    
        return number >0;
        
}
console.log(isPositive(1))


// 9. Напиши две функции: первая их них принимает возраст и возвращает true,
// если он достиг совершеннолетия, и false, если нет, а вторая возвращает строку
// "совершеннолетний", если совершеннолетний, иначе "несовершеннолетний".
// Вторая функция должна использовать первую.

function isAdult(age) {
    return age >= 18
}
function getLegalStatus(age) {
    if (isAdult(age)) {
        return `Совершеннолетний`;
    } else {
        return `Несовершеннолетний`;
    }
}
console.log(getLegalStatus(18))


// 10. Напиши функцию, которая принимает два числа и с помощью простого условия определяет и возвращает наибольшее из них.

function maxNumber(number1, number2) {
    if (number1 > number2) {
        return number1;
    } 
    return number2;
    
}
console.log(maxNumber(5, 6));


// 11. Напиши функцию, которая принимает три разных числа, складывает их и возвращает среднее арифметическое значение.

function sum(a, b ,c) {
    return (a + b + c);
}
console.log(sum(1, 3, 5));


// 17. Напиши функцию, которая принимает число и с помощью цикла выводит в консоль все четные числа от единицы до этого числа.
function getEvenNumbers(number) {
    for (let i = 1; i <= number; i++)
        if (i%2 === 0) {
        console.log(i);
    }
}
getEvenNumbers(10)


// 18. Напиши функцию, которая принимает стартовое число и циклом выводит в консоль обратный отсчет от него до нуля.
// functoin reversCicle(number) {



// 19. Напиши функцию, которая принимает число и циклом считает сумму всех целых чисел от единицы до заданного, а затем возвращает итог.