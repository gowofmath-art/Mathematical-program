# 使用蔡勒公式（Zeller's congruence）
# 直接告訴星期幾 (星期日 = 0 依序下去)
# 在輸出  幾年幾月的月曆

y = int(input())
m = int(input())
print(f'這是{y}年{m}月的月曆')

D = '日一二三四五六'
for n in D:
    print(f'{n:>2}', end="")
print()

def Zeller(y,m,d):
    if m < 3:
        m += 12
        y -= 1
    y1 = y % 100
    y2 = y // 100
    w = (y1 + y1//4 + y2//4 - 2*y2 + (13*(m+1)//5) + d - 1) % 7
    return w

def is_leap(y):
    return (y%4 == 0 and y%100 != 0) or (y%400 == 0)

def calendar(y, m):
    mon = [31,28,31,30,31,30,31,31,30,31,30,31]
    if is_leap(y):
        mon[1] = 29
    start_day = Zeller(y, m, 1)
    print("   " * start_day, end="")
    for i in range(1, mon[m-1] + 1):
        print(f'{i:>2}', end=" ")
        if (i + start_day) % 7 == 0:
            print()

calendar(y, m)
