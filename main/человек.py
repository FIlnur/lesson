# Реализуйте класс «Человек». Необходимо хранить в 
# полях класса: ФИО, дату рождения, контактный телефон, 
# город, страну, домашний адрес. Реализуйте методы класса 
# для ввода данных, вывода данных, реализуйте доступ к 
# отдельным полям через методы класса.

class person:

    def __init__(
            self, name, date, telephone, siti, country, home_address
    ):
        self.name = name
        self.date = date
        self.telephone = telephone
        self.siti = siti
        self.country = country
        self.home_address = home_address

    def input_data(self):
        self.name = input("Введите ФИО: ")
        self.date = input("Введите дату рождения: ")
        self.telephone = input("Контактный телефон: ")
        self.siti = input("Город: ")
        self.country = input("Страна: ")
        self.home_address = input("Домашний адрес: ")

    def __str__(self):
        return self.name, self.date, self.telephone, self.siti, self.country, self.home_address
    

    




