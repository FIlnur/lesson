#Пользователь вводит число, необходимо возвести в степень
number=int(input("Введите число: "))
power = int(input("Ведите степень: "))

#result = 1

#if power <0 or power >7:
#
#    print("ошибка ввода")
#else:
#    if power >0:
#        result *= number
#    if power >1:
#        result *= number
 #   if power >2:
 #       result *= number
 #   if power >3:
 #       result *= number
 #   if power >4:
 #       result *= number
 #   if power >5:
#        result *= number
#    if power >6:
#        result *= number
#    if power >7:
 #       result *= number  
#
#    print(result)

result = 1
count = 0
while count < power:
    result *= number
    count +=1
print(result)