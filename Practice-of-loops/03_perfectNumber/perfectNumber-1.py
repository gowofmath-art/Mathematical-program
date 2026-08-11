# 3.	迴圏的練習-perfectNumber
# 一個數字若等於其所有因數的總和，則此數為perfect number。
# 找出100以內所有的完美數。
# 說明：6的因數為1, 2, 3，6=1+2+3，故6為完美數。
# 法一：正常作法

def perfectnumber(n):
    perfect = []
    for n in range(2,100):
        p = 0
        for i in range(1,n): 
            if n%i ==0:
                p = p + i
        if p == n:
            perfect.append(n)
    return perfect        

print(perfectnumber(1000))