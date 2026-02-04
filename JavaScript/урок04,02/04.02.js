

// Запрашиваем число у пользователя
const number = prompt('Введите число:');

// Проверяем, что введено число
if (number !== null && !isNaN(number)) {
    // Возводим в квадрат и выводим результат
    const result = Number(number) ** 2;
    alert(`Квадрат числа: ${result}`);
} else {
    alert('Вы ввели не число или отменили ввод!');
}
