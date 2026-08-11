# 2.	迴圏的練習-factor
# 輸入一正整數，求其所有的因數。
# 說明：36的因數為1, 2, 3, 4, 6, 9, 12, 18, 36。
# 法三：讓list照順序排好
#  
def f(n):
    A = []
    B = []
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            A.append(i)
            if i != n // i:
                B.append(n // i)
                
    return A + B[::-1]

n = int(input("輸入一個正整數"))
print(f(n))  

# 以及一行版本：
def f1(n):
    return [i for i in range(1, int(n**0.5) + 1) if n % i == 0] + [n // i for i in range(int(n**0.5), 0, -1) if n % i == 0 and i != n // i]
print(f1(n))
