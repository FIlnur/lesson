# Создайте класс Паспорт, который будет содержать паспортную 
# информацию о гражданине заданной страны. С помощью механизма 
# наследования реализуйте класс ForeingPassport (загран.паспорт) 
# производный от Passport. напомним что заграничный паспорт содержит 
# помимо паспортных данных также данные о визах, номер заграничного паспорта. 
# Каждый из классов должен содержать необходимые методы.

class Passport:
     
     def __init__(self, name, date_of_birth, series_passport_number, date_of_issue, registration):
        self.name = name
        self.date_of_birth = date_of_birth
        self.series_passport_number = series_passport_number
        self.date_of_issue = date_of_issue
        self.registration = registration
    # def input_data(self):
    #     self.name = input("Введите ФИО: ")
    #     self.date_of_birth = input("Дата рождения: ")
    #     self.series_passport_number = input("Серия и номер папорта: ")
    #     self.date_of_issue = input("Дата выдачи паспорта: ")
    #     self.registration = input("Прописка: ")


class visa: 
    def __init__(self, country, expiry_date, type):
        self.country = country
        self.expiry_date = expiry_date
        self.type = type

    def input_visa_data(self):
        self.country = input("Страна визы: ")
        self.expiry_date = input("Срок действия визы (дата): ")
        self.type = input("Тип визы: ")


class Foreign_passport(Passport):
   
    def __init__(self, name, date_of_birth, series_passport_number, date_of_issue, registration, series_foreign_passport_number, visa):
       
        super().__init__(name, date_of_birth, series_passport_number, date_of_issue, registration)
        self.series_foreign_passport_number = series_foreign_passport_number
        self.visa = visa 


a = Passport("Иванов Иван", "01.02.2001", "12345678", "12.12.2015", "Татарстан")
print(a)