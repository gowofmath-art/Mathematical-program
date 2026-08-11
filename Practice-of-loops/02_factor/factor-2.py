# 2.	迴圏的練習-factor
# 輸入一正整數，求其所有的因數。
# 說明：36的因數為1, 2, 3, 4, 6, 9, 12, 18, 36。
# 法二：檢查到一半即可：時間複雜度 O(n^(1/2))

def f(n):
    factor = []
    for i in range(1, int(n**0.5)+1):
        if n%i == 0 :
            factor.append(i)
            if i != n//i:
                factor.append(n//i)
    return factor

n = int(input("輸入一個正整數"))
print(f(n))
