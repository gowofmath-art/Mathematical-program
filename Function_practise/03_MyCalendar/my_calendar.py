# 3.  日期的練習-MyCalendar
# 給兩個整數，第一個數字代表那一年，第二個數字代表那一月，列印出那一年那一月的月曆。
# 提示：找出那年那個月1日是星期幾
# 考慮閏年的問題：每四年一閏、百年不閏、四百年又閏
# 其想法就是真的去算從1/1/1開始，到指定月之前到底過了幾天，才可以決定start_day在星期幾


y = int(input())
m = int(input())
print(f'這是{y}年{m}月的月曆')

D = '日一二三四五六'
for n in D:
    print(f'{n:>2}', end="")
print()

def is_leap(y):
    return (y%4 == 0 and y%100 != 0 or y%400 == 0)
def calendar(y, m):
    mon = [31,28,31,30,31,30,31,31,30,31,30,31]
    if is_leap(y):
        mon[1] = 29
    f = 1  
    day = 365*(y-1) + ((y-1)//4 - (y-1)//100 + (y-1)//400) + sum(mon[:m-1])
    start_day = (f + day) % 7
    print("   " * start_day, end="")
    for i in range(1, mon[m-1] + 1):
        print(f'{i:>2}', end=" ")
        if (i + start_day) % 7 == 0:
            print()
calendar(y,m)