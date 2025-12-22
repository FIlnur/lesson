DAYS_PER_YEAR = 365
HOURS_PER_YEAR = 8760
MINUTS_PER_YEAR = 525600
SECONDS_PER_YEAR = 3153600
age = int(input("вам лет: "))

days = age * DAYS_PER_YEAR
hours = age * HOURS_PER_YEAR
minuts = age * MINUTS_PER_YEAR
seconds = age * SECONDS_PER_YEAR
print(f"вам дней: {days}")
print(f"вам часов: {hours}")
print(f"вам минут: {minuts}")
print(f"вам секунд: {seconds}")
