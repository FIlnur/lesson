#Пользователь вводит 
count = int(input("введите первое число: "))
end = int(input("введите диапазон: "))

multiples_9_sum = 0
count_9_multiples = 0
evens_sum = 0
count_evens = 0
odds_sum = 0
count_odds = 0

while count <= end:
    if count % 9 == 0:
        multiples_9_sum += number
        count_9_multiples += 1
    if count % 2 == 0:
        evens_sum += number
        count_evens += 1
    else:
        odds_sum += number
        count_odds += 1
    number +=1
print(multiples_9_sum)
print(multiples_9_sum / count_9_multiples)
print(evens_sum)
print(evens_sum / count_evens)
print(odds_sum)
print(odds_sum / count_odds)