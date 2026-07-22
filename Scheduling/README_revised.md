# 多處理器任務排程模擬器 (Task Scheduling Simulator)

本專案旨在模擬電腦科學與作業研究（OR）中經典的**多處理器任務排程問題 (Multiprocessor Scheduling Problem)**。透過模擬不同的排程演算法，觀察多核心/多工人環境下的資源分配效率與總完工時間（Makespan）。

## 題目定義

*   `jobs`: 一個整數陣列（`List[int]`），代表每個工作的工作量（執行時間）。
*   `workers`: 一個整數（`int`），代表可用的工人（處理器通道）數量。
*   **輸出目標**：回傳每個人分配到的工作順序（`List[List[int]]`），以及所有工人全部完工時所花費的總時間（`int`, Makespan）。

---

## 演算法實作

### 1. 靜態區塊排程 (Static Block Scheduling)
*   **檔案**: `01_static_block_schedule.py`
*   **演算法思維**: 靜態劃分（Static Partitioning）
*   **邏輯說明**: 
    在開工前依原始數列順序，將工作切成 $w$ 個盡量等長的連續區塊，預先固定分配給各位工人。
    *   若工作量 $n$ 無法被工人數 $w$ 整除，前 $r$ ($n \pmod w$) 位工人會分到 $q+1$ ($n \mathbin{//} w + 1$) 個工作，其餘工人分到 $q$ 個工作。
    *   **缺點**: 由於無視工作量差異硬性劃分，容易引發負載不均（Load Imbalance），導致整體完工時間受限於拿到大任務的工人。

### 2. 動態佇列排程 (Dynamic Work Queue Scheduling)
*   **檔案**: `02_dynamic_schedule.py` (或 `01_dynamic_schedule.py`)
*   **演算法思維**: 貪婪策略（Greedy Strategy）、動態負載平衡（Dynamic Load Balancing）
*   **邏輯說明**: 
    模擬生產者-消費者模型（Producer-Consumer Pattern）。開工後不預先綁定任務，而是即時監控所有工人的狀態。**每當有新任務進來時，一律分配給當前累積耗時最短（最快空閒）的工人**。
    *   **優點**: 自動適應不同任務大小，避免工人閒置（Reduce idle waste），大幅壓低總完工時間。
    *   **應用場景**: 類似 `GNU parallel`、執行緒池（Thread Pool）與 CPU 多核心動態調度邏輯。

---

## 效能對比 (Performance Comparison)

使用相同的測試資料進行實驗：
*   `jobs = [3, 8, 2, 6, 9, 1, 5, 11, 6, 7, 10]`
*   `workers = 4`

| 排程策略 | 各工人分配狀況 | 各工人總耗時 | 總完工時間 (Makespan) |
| :--- | :--- | :--- | :--- |
| **靜態區塊** | `[[3, 8, 2], [6, 9], [1, 5, 11], [6, 7, 10]]` | `[13, 15, 17, 23]` | **23** |
| **動態佇列** | `[[3, 1, 5, 7], [8, 6], [2, 9, 10], [6, 11]]` | `[16, 14, 21, 17]` | **21** |

> **結論**：動態排程透過即時繞過大任務卡住的工人，成功將整體完工時間從 23 縮短至 21，展現了動態調節的威力。當數量更多會更有感！

---

## 未來擴充計畫
- [x] 實作靜態區塊排程 (Static Block Scheduling)
- [x] 實作動態佇列排程 (Dynamic Work Queue Scheduling)
- [ ] 實作**最長任務優先排程 (LPT, Longest Processing Time First)**：先將 `jobs` 降序排序後再進行動態分配，觀察近乎最優解的優化結果。