# 1.	使用亂數產生驗証碼，分別使用三個函式完成-verify
# (1)	產生四個數字，可以重覆
# 執行速度較快，時間複雜度一樣，差別在於常數項


import random
def random_1_optimized():
    return "".join(random.choices("0123456789", k=4))
print(random_1_optimized())
