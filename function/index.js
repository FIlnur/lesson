// function getExclamated(text) {
//     if (!text) {
//         return text;
//     }
//     if (text === "") {
//         return "";
//     }
//     return text + "!";
// }

// function exclamate(text) {
//     console.log(getExclamated(text));
// }

// exclamate("Hello");
// console.log(getExclamated("Goodbye") === "Goodbye!");
// console.log(getExclamated("") === "");
// console.log(getExclamated(null) === null);
// console.log(typeof getExclamated(undefined) === 'undefined');


//Написать функцию, которая принимает два числа и возвращает меньшее из них
//  Написать функцию, которая принимает 2 числа и возвращает меньшее из них.

function min (number1, number2) {
    if (number1 == null || number2 == null) {
        throw new Error("Нельзя сравнить null с number");
    }
    if (number1 <= number2) {
        return number1;
    }
    else {
        return number2;
    }
}

function testMin() {
    console.log(min(3, 5) === 3);
    console.log(min(5, 3) === 3);
    console.log(min(3, 3) === 3);
    try {
        min(null,3);
        min(3,null);
        console.log(false);
    } catch { 
        console.log(true);
    }
}

testMin()

