# 7.	迴圏的練習-rabbit
# 老王養了一群兔子，若三隻三隻一數，剩餘一隻；若五隻五隻一數，剩餘三隻；若七隻七隻一數，剩餘二隻。試問兔子最少有幾隻。

# 法二：while 迴圈，符合數學思想

def rabbit():
    x = 1
    while x % 5 != 3:
        x += 3

    while x % 7 != 2:
        x += 15

    return x

print (rabbit())
