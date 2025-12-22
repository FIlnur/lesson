# индикатор зарядки
import time
import os

def print_loader():
    print('[', end='')
    for _ in range(10):
        print('===', end='', flush=True)
        time.sleep(2)
    print('] 100%')

if __name__ == "__main__":
    print_loader()