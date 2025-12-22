

class Human:

    def __init__(self, name, age):
        self.name = name
        self.age = age
    def input_data(self):
        self.name = input("Введите ФИО: ")
        self.age = input("Полных лет: ")

    def __str__(self):
        return f"{self.name}, вам {self.age} лет"


class Builder(Human):

    def __init__(self, name, age, count_of_buildings):
        super().__init__(name, age)
        self.count_of_buildings = count_of_buildings

class Sailor(Human):

    def __init__(self, name, age, number_of_swims):
        super().__init__(name, age)
        self.number_of_swims = number_of_swims

class Pilot(Human):

    def __init__(self, name, age, number_of_flights):
        super().__init__(name, age)
        self.number_of_flights = number_of_flights

