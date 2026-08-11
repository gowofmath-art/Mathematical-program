# 3.	迴圏的練習-perfectNumber
# 一個數字若等於其所有因數的總和，則此數為perfect number。
# 找出100以內所有的完美數。
# 說明：6的因數為1, 2, 3，6=1+2+3，故6為完美數。
# 法三：數論解法：利用梅森質數(Mersenne Prime)
# 時間複雜度為O(n*n^(1/2))
# 利用定理：若 2^p - 1 是一個梅森質數，那麼 2^(p-1)*(2^p - 1) 就必定是一個偶完美數

#先確認是質數
def prime(x):
    if x < 2:
        return False
    for i in range(2, int(x**0.5) + 1):
        if x % i == 0:
            return False
    return True

# 使用定理：只要m = 2**p -1 是質數，那就帶入 公式2^(p-1)*(2^p - 1) 是完美數
def perfectNumber(x):
    perfectnumber = []
    for p in range(2, x): 
        m = 2**p - 1
        if prime(m): 
            perfect = 2**(p-1) * m
            perfectnumber.append(perfect)
    return perfectnumber        

print(perfectNumber(10))