# 3.	選擇性敘述的練習-leapYear
# 輸入一西元年，如2015。判斷此年份是否為閏年。
# 提示：每四年一閏，每百年不閏，每四百年一閏。

def leapyear(n):
    if (n%4 == 0 and n%100 != 0 or n%400 ==0) :
        return "閏年"
    else:
        return "非閏年"
    
n = int(input("西元年"))
print(leapyear(n))