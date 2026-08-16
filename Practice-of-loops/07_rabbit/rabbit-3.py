# 7.	迴圏的練習-rabbit
# 老王養了一群兔子，若三隻三隻一數，剩餘一隻；若五隻五隻一數，剩餘三隻；若七隻七隻一數，剩餘二隻。試問兔子最少有幾隻。

# 法三：逐次增長篩法（Step Sieve）

def solve_rabbit():
    # 條件列表：(除數 m, 餘數 r)
    # 條件順序可能影響實際迴圈次數，但單純由大到小排序不保證一定較快
    conditions = [(7, 2), (5, 3), (3, 1)]
    
    ans = 0
    step = 1
    
    for m, r in conditions:
        while ans % m != r:
            ans += step
        step = step*m  # 兩兩互質，最小公倍數直接相乘
        print (ans)
        
    return ans

print(solve_rabbit()) 
    




