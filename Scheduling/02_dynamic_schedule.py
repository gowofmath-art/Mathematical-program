# 01_dynamic_schedule.py
# 一開始先輪流分配工作，之後只會將工作給最快做完工作的人。
# 輸出「每個人的被分配到的工作順序」

# 可以跟 static (靜態排程) 做比較。

# Example:
#jobs = [3, 8, 2, 6, 9, 1, 5, 7, 4, 10]
#workers = 4

# input : [[3, 8, 2], [6, 9, 1], [5, 7], [4,10]]
def dynamic_schedule(jobs, workers):

