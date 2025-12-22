a = int(input("Введите число 1: "))
b = int(input("Введите число 2: "))

print(
    '1. Sum\n' +
    '2. Difference\n' +
    '3. Mean\n' +
    '4. Product'
)

choice = input()

if choice == '1':
    print(a+b)
elif choice == '2':
    print(a-b)
elif choice == '3':
    print((a+b)/2)
elif choice =='4':
    print(a*b)