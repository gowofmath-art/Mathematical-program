# 1.	使用亂數產生驗証碼，分別使用三個函式完成-verify
# (1)	產生四個數字，可以重覆

import random
def random_1():
    x = ""
    for i in range(4):
        n = random.randint(0, 9)
        x += str(n) 
    return x    
print(random_1())