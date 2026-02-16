"use strict";

// проверка на четность
// const number = +prompt("Input number")

// if (number % 2 == 0) {
//     alert("even");
// } else {
//     alert("odd");
// }

// Задачи

// 1. Запросить у пользователя число и определить,
// оно положительное, отрицательное или ноль.
// const number = +prompt("Input number");
// if (number < 0) {
//     alert("отрицательный");
// }
// if (number == 0) {
//     alert("равно нулю");
// }
// else {
//     alert("пололжительный")
// }

// 2. Запросить у пользователя его возраст и проверить
// корректность введенных данных (0–120 лет).

// const age = prompt("Ведите возраст")

// if (0<age && age<120) {
//     alert("True");
// }  else {
//     alert("False");
// }

// 3. Запросить у пользователя число и вывести его 
// модуль (|7| = 7, |-7| = 7).

// 4. Запросить у пользователя время (часы, минуты,
// секунды) и проверить корректность введенных данных.

// const [hours, minuts, seconds] 

// проверка на возраст
// const age = prompt("What is your age?");

// if (age < 18) 
//     console.log("not");
// else
//     console.log("yes"); 

// 5. Запросить координаты точки (x, y) и определить номер
// четверти, в которую попала эта точка. Необходимо учесть
// случаи попадания точки на оси X или Y или в начало
// координат.

// Реализовать калькулятор. Пользователь вводит 2 числа и
// знак (+ - * /). В зависимости от введенного знака решить
// пример и вывести результат.
const number1 = +prompt("Введите первое число:");
const number2 = +prompt("Введите второе число:");
const operation = +prompt("Выберите операцию:\n1. +\n2. -\n3. *\n4. /");
Let operationResult = "Неверный выбор";
switch (operation {
    case 1: operationResult = number1 + number2; break;
    case 2: operationResult = number1 - number2; break;
    case 3: operationResult = number1 * number2; break;
    case 4: operationResult = number1 / number2; break;
});