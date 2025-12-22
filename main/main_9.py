#Выведите все числа в дипазоне введенном пользователем, кратное 7
count = int(input("введите первое число: "))
end = int(input("введите диапазон: "))
multiples_sum = 0
while count <= end:
    if count % 7 == 0:
        multiples_sum += count
    count +=1
    print(multiples_sum)