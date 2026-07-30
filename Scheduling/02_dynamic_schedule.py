# 02_dynamic_schedule.py
# 一開始先輪流分配工作，之後只會將工作給最快做完工作的人。
# 輸出「每個人的被分配到的工作順序」

# 可以跟 static (靜態排程) 做比較。

# Example:
#jobs = [3, 8, 2, 6, 9, 1, 5, 11 , 6, 7,10]
#workers = 4

# output : [[3, 1, 5, 7], [8, 6], [2, 9, 10], [6, 11]]

def dynamic_schedule(jobs, workers):
    job = [0]*workers
    a = [[] for i in range(workers)]

    for i in jobs:
        x = 0
        for j in range(1,workers):
            if job[j] < job[x]:
                x = j

        a[x].append(i)
        job[x] = job[x] + i

    print(max(job))
    return a , job

