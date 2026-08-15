#  4.	迴圏的練習-amstrong
# Amstrong數是指一個三位數的整數，其各位數之立方和等於該數本身。
# 找出所有的Amstrong數。
# 說明： $153=1^3+5^3+3^3$，故153為Amstrong數。
# 法二：直接用數學做法來計算
# 直接透過位數 $a, b, c$ 來組合出 n。根據定義，要尋找的是符合以下等式的組合：
# 100a + 10b + c = a^3 + b^3 + c^3

def Amstrong():
    amstrong = []
    for a in range(1,10):
        for b in range(10):
            for c in range(10):
                n = 100*a + 10*b + c
                if n == a**3 +b**3 + c**3:
                    amstrong.append(n)
    return amstrong

print (Amstrong())
