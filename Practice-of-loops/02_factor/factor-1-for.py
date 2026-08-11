# 2.	迴圏的練習-factor
# 輸入一正整數，求其所有的因數。
# 說明：36的因數為1, 2, 3, 4, 6, 9, 12, 18, 36。
# 法一：基本for迴圈

def f(n):
    for i in range(1,n):
        if  n%i == 0:
            print (i,end=",")
    return n

n = int(input("輸入正整數"))
print(f(n))