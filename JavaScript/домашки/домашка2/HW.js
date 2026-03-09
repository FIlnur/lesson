function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

// 11. Напиши функцию, которая принимает три разных числа,
// складывает их и возвращает среднее арифметическое значение.

function arefmeticalAverage(a, b, c) {
    return(a + b + c) / 3;
}
console.log(arefmeticalAverage(10, 25, 32));



// 12. Напиши функцию, которая принимает исходную цену товара и
// процент скидки, вычисляет и возвращает итоговую стоимость.


// 13. Напиши функцию, которая принимает расстояние в километрах и
// возвращает это же значение, переведенное в метры.

function kilometersToMeters(kilometers) {
    return kilometers * 1000;
}
console.log(kilometersToMeters(1));


// 14. Напиши функцию, которая принимает строку с паролем и возвращает истину,
// если в нем строго больше восьми символов, иначе ложь.

function isPasswordLongEnough(password) {
    return password.length > 8;
}
console.log(isPasswordLongEnough(asddfgbf));

// 15. Напиши функцию, которая принимает название города и страны,
// а возвращает их объединение через запятую(в виде "").

function formatCityCountry(city, country) {
    return `${city}, ${country}`;
}
console.log(formatCityCountry("Москва", "Россия"));


// 16. Напиши функцию, которая принимает название цвета светофора и
// через условие возвращает команду: для красного - стоп, для желтого - жди, для зеленого - иди.

function getTrafficLight(color) {
    if (color === 'красный') {
        return 'стоп';
    } else if (color === 'жёлтый') {
        return 'жди';
    } else if (color === 'зелёный') {
        return 'иди';
    }
    return 'неизвестный цвет';
}
console.log(getTrafficLight("красный"))

// 19. Напиши функцию, которая принимает два числа и циклом считает сумму всех
// целых чисел от первого до второго заданного, а затем возвращает эту сумму.

function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumRange(1,6));


