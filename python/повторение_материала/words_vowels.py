# Из массива слов выведите только согласные буквы всех слов
# в которых больше двух гласных
# Например из массива ['hello', 'memorize', 'hi', 'google']
# должно вывестись:
# mmrz
# ggl

VOWELS = "aeiou"

words = ['hello', 'memorize', 'hi', 'google']
def count_vowels(text: str) -> int:
    count  = 0
    for letter in text:
        if letter in VOWELS:
            count += 1
    return count

def take_consonants(text: str):
    for letter in text:
        if letter not in VOWELS:
            yield letter

# 1 берем каждое слово и перебираем на количество гласных букв в слове
for word in words:
    if count_vowels(word) > 2:
        print(''.join(take_consonants(word)))
