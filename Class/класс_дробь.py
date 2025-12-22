# Класс дробь. Необходимо хранить в полях класса: числитель и знаминатель. 
# Реализуйте методы класса для ввода и вывода данных, реализуйте доступ к 
# отдельным полям через методы класса. Так же создайте методы класса для выполнения 
# арефметических операций (сложение, вычитание, умножение, деление)

class Fraction:

    def __init__(self, numerator, denominator):
        self._numerator = numerator
        self._denominator = denominator




    @property
    def numerator(self):
        return self._numerator

    @property
    def denominator(self):
        return self._denominator

    def multiple(self, other):
        return Fraction(
            self.numerator * other.numerator,
            self.denominator * other.denominator
            )

    def devide(self, other):
        return Fraction(
            self.numerator * other.denominator,
            self.denominator * other.numerator
            )

    def add(self, other):
        return Fraction(
            self.numerator * other.denominator + other.numerator * self.denominator,
            self.denominator * other.denominator
            )

    def sub(self, other):
        return Fraction(
            self.numerator * other.denominator - other.numerator * self.denominator,
            self.denominator * other.denominator
        )

    def __str__(self):
        return f"{self.numerator} / {self.denominator}"

a = Fraction(3 , 5)
b = Fraction(5 , 8)

print(a.multiple(b))
print(a.devide(b))
print(a.add(b))
print(a.sub(b))
