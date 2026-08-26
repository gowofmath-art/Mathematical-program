# (2)	產生四個數字，不可以重覆
# 優化
# random.sample 是專門設計用來處理「不重複抽樣」的函式
# random.sample 保證這 P(10,4) 種結果的出現機率嚴格均等

import random

def random_2():
    return "".join(random.sample("0123456789", 4))

print(random_2())