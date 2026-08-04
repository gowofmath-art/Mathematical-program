# 1.	迴圏的練習-expression
# 利用for迴圏計算1^2-2^2+3^2-4^2+…+49^2-50^2的值。
# 法二：一個for迴圈

s = 0
for i in range(1,51):
    s = s+(-1)**(i-1)*i**2
    # print(s,end=",")  #可觀察變化

print(s)