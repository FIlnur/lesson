# Класс город. Необходимо хранить в полях класса: название города, регион, 
# страна, количество жителей в городе, почтовый индекс, телефонный код города. 
# Реализуйте методы класса для ввода и вывода данных, реализуйте доступ 
# к отдельным полям через методы класса.


class City:

    def __init__(
            self, City, region, country, number_of_inhabitants, index, telephone_area_code
    ):
        self.name = City
        self.region = region
        self.country = country
        self.number_of_inhabitants = number_of_inhabitants
        self.index = index
        self.telephone_area_code = telephone_area_code

    def input_data(self):
        self.name = input("Введите название города: ")
        self.region = input("Регион: ")
        self.country = input("Страна: ")
        self.number_of_inhabitants = input("Численность: ")
        self.index = input("Почтовый индекс города: ")
        self.telephone_area_code = input("Телефонный код города: ")

    def __str__(self):
        return f"{self.name}, страна {self.country}"


a=City("Набережные Челны", "Татарстан", "Россия", "548221", "423800", "8-8552")
# запускает сбор данных
# a.input_data()     
print(a)
