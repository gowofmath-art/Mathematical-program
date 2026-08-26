# (3)	產生四個由數字和大寫英文字母組成

import random
def random_3():
    x = ""
    number = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for i in range(4):
        n = random.choice(number)
        x += str(n) 
    return x    
print(random_3())
