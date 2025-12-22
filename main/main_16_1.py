USD_TO_RUB = 81.45
CNY_TO_RUB = 11.44

while True:
    try:
        rub = float(input("Введите сумму в рублях: "))  # Используем float для дробных чисел
    except ValueError:
        print("Ошибка: Введите числовое значение для рублей.")
        continue  # Переходим к следующей итерации цикла

    print(
        'Варианты конвертации:\n' +
        '1) USD - доллары\n' +
        '2) CNY - юани'
    )

    choice = input("Выберите валюту для конвертации (1 или 2): ")

    if choice == '1':
        converted_value = rub / USD_TO_RUB  # Делим рубли на курс, чтобы получить доллары
        currency = 'USD'
    elif choice == '2':
        converted_value = rub / CNY_TO_RUB  # Делим рубли на курс, чтобы получить юани
        currency = 'CNY'
    else:
        print("Ошибка: Неверный выбор валюты.")
        continue  # Переходим к следующей итерации цикла

    print(f'{converted_value:.2f} {currency}')  # Форматированный вывод с указанием валюты

    print("Хотите продолжить? (да/нет)")
    if input().strip().lower() != 'да':
        break

print("Программа завершена.")