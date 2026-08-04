# 1.	迴圏的練習-expression
# 利用for迴圏計算1^2-2^2+3^2-4^2+…+49^2-50^2的值。
# 法一： 2個for迴圈

s_1 = 0
s_2 = 0
for i in range(1,51,2):
    s_1 = s_1 + i**2
for j in range(2,51,2):
    s_2 = s_2 + j**2
print(s_1-s_2)
