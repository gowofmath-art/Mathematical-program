# 01_static_block_schedule.py
# 將工作依原始順序，切成n個盡量等長的連續區塊，固定分配給n位工人。
# 前 r 位工人分到 q+1 個工作，其餘工人分到 q 個工作
# 輸出「每個人的被分配到的工作順序」


# Example:
#jobs = [3, 8, 2, 6, 9, 1, 5, 7, 4, 10]
#workers = 4

# output : [[3, 8, 2], [6, 9, 1], [5, 7], [4,10]]

def static_schedule(jobs , workers):
    n = len(jobs)
    w = workers

    job = []
    start = 0

    for i in range(w):
        a = []
        x = n//w
        if i < n % w:
            x = x +1

        for j in range(x):
            a.append(jobs[start + j])

        job.append(a)
        start = start + x

    return job


