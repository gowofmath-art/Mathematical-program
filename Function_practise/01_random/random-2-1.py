# (2)	產生四個數字，不可以重覆
# 採用「隨機猜測 > 重複則丟棄重抽」的想法
# 迴圈次數具隨機性（且符合幾何分佈）

#總期望迴圈次數約為：
# 1+ 10/9 + 10/8 + 10/7  = 4.79

import random
def random_2():
    x = ""
    while len(x)<4:
        n = random.randint(0, 9)
        if str(n) not in x :
            x += str(n) 
    return x    
print(random_2())
