# Пользователь вводит число. Определить количество 
# количество цифр в этом числе, посчитать их сумму и 
# среднее арефметическое. Определить количество нулей в этом числе. 
# Общение с пользователем организовать через меню.

while True:
    number = int(input())
    sum_ = 0
    count = 0

    while  number !=0:
        sum_ += number % 10
        number //= 10
        count += 1
        print(
        '1) количество\n'
        '2) сумма\n'
        '3) среднеарефметическое\n'
        )
        choice = input()
        match choice:
            case '1':
                print(count)
            case '2':
                print(sum_)
            case '3':
                print(sum_ / count)
            case _:
                print("Нет такого варианта")

        to_exit = input("Выйти?(Y/n): ") == 'n'
        if to_exit:
            break