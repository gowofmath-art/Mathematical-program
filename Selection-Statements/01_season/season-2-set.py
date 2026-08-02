# 1.	選擇性敘述的練習-season
# 輸入月份1~12月，利用switch判斷相對應的季節春、夏、秋、冬並印出。若不在此範圍則印出”輸入錯誤”。


def seasons(n):
    if n in (3,4,5):
        return "春"
    elif n in (6,7,8):
        return "夏"
    elif n in (9,10,11):
        return "秋"
    elif n in (12,1,2):
        return "冬"
    else:
        return "輸入錯誤"

n = int(input("月份"))
print(seasons(n))
