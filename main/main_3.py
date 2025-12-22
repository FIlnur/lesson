# Пользователь вводит с клавиатуры число. 
# Необходимо проверить его на кратность 7. 
# Если число кратно, требуется вывести на экран число 
# и надпись Number is multiple 7. 
# Если число не кратно выведите на экран число 
# и надпись Number is not multiple 7.
a = int(input("Введите число: "))
if a%7==0:  
    print(str(a) + " Number is multiple 7")
else:
    print(str(a) + " Number is not multiple 7")
    