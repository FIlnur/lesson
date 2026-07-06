# Посчитать сколько раз встречается каждое слово в файле
# Вывести  статистику упомонания слов в порядке убывания

# Берем каждое слово по очереди в цикле
# Вторым циклом проходимся по каждому слову повторно и
# считаем сколько раз встретилось слово из первого цикла
import re

text = "Hello my Friend it's me alesha your best friend me"
# Разделяет строку на список из строк по делителю выше
# Находит все комбинации из знаков припинания и пробелов.
splitted_words = re.split(r"[.,;:!?\-()<>& ]+", text)
# Применяет функцию (lambda)  к каждому слову из splitted_words
# и выдает генератор полученных строк
words = map(lambda word: word.lower(), splitted_words)
words_stats = {}

for word in words:
    words_stats[word] = words_stats.get(word, 0) +1

stats = list(words_stats.items())
stats.sort(reverse=True, key=lambda stat:stat[1])

print(*stats, sep='\n')

# Надоу честь знаки припинания
# Добавить проверку, что мы это слово уже проверили
