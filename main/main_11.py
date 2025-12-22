#пользователь вводит число, если число больше 0 нужно 
# вывести надпись "Number is positive", если меньше 
# нуля "Number is equal to zero", если равно нулю "Number is equal to zero". 
# Когда пользователь вводит число 7 программа прекращает свою работу и пишет "Goodbye!"

number=int(input("Введите число: "))
if number == 7:
    print("Goodbye!")
elif number == 0:
    print("Number is equal to zero")
elif number < 0:
    print("Number is negative")
else:
    print("Number is positive")