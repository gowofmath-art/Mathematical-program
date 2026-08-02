# 1.	選擇性敘述的練習-season
# 輸入月份1~12月，利用switch判斷相對應的季節春、夏、秋、冬並印出。若不在此範圍則印出”輸入錯誤”。

def seasons(n):
    season = ["冬天"  , "春天" , "夏天" , "秋天"]

    if n >1 and n <12 :
        i = ((n % 12) // 3)
        return season[i]

    else:
        return "輸入錯誤"

n = int(input("月份"))
print(seasons(n))
