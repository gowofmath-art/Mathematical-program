# 7.	迴圏的練習-rabbit
# 老王養了一群兔子，若三隻三隻一數，剩餘一隻；若五隻五隻一數，剩餘三隻；若七隻七隻一數，剩餘二隻。試問兔子最少有幾隻。

# 法四：中國剩餘定理 (Chinese remainder theorem，CRT)

def crt(remainders, moduli):
    M = 1
    for m in moduli:
        M *= m

    x = 0

    for a, m in zip(remainders, moduli):
        Mi = M // m
        yi = pow(Mi, -1, m)   # Mi 在 mod m 下的模反元素
        x += a * Mi * yi

    return x % M

print(crt([1, 3, 2],[3, 5, 7]))