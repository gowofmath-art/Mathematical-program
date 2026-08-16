# 5.	迴圈的練習-prime
# 輸入一正整數，找出所有小於或等於的質數。

def prime(n):
    P = []
    for i in range(2,n):
        prime = True
        for j in range(2, int(i**(0.5)+1)):
            if i%j == 0:
                prime = False
                break
        if prime is True:
            P.append(i)    
    return P

n = int(input("請輸入一正整數"))
print(prime(n))