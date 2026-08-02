# 1.	選擇性敘述的練習-season
# 輸入月份1~12月，利用switch判斷相對應的季節春、夏、秋、冬並印出。若不在此範圍則印出”輸入錯誤”。

def seasons(n):
    if (n==3 or n==4 or n==5) :
        return "春"
    elif (n==6 or n==7 or n==8):
        return "夏"
    elif (n==9 or n==10 or n==11):
        return "秋"
    elif (n==12 or n==1 or n==2):
        return "冬"
    else:
        return "輸入錯誤"

n = int(input("月份"))
print(seasons(n))


