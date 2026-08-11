# 3.	迴圏的練習-perfectNumber
# 一個數字若等於其所有因數的總和，則此數為perfect number。
# 找出100以內所有的完美數。
# 說明：6的因數為1, 2, 3，6=1+2+3，故6為完美數。
# 法二：i的部分只檢查到n的平方根，大大降低時間複雜度。
# 時間複雜度為O(n*n^(1/2))


def perfectNumber(x):
    perfect = []
    for n in range(2,x):
        p = 0
        for i in range(1,int(n**(0.5)+1)): 
            if n%i ==0:
                p = p + i
                if i!=n//i and i!=1:
                    p =p + n//i
        if p == n:
            perfect.append(n)
    return perfect        
print(perfectNumber(1000))


# 一行的版本：
def perfectNumber1(x):         
    return [n for n in range(2, x) if sum({i for i in range(1, int(n**0.5) + 1) if n%i == 0 for i in (i, n//i) if i!=n}) == n]
print(perfectNumber1(1000))