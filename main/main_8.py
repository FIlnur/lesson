#пользователь вводит число, нужно вывести только четные числа в диапозоне

count = int(input("введите число: "))
end = int(input("введите диапазон: "))

if count % 2 != 0:
    count += 1
while count <= end:
    print(count)
    count +=2