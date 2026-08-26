// # (2)	產生四個數字，不可以重覆
// # 採用「隨機猜測 > 重複則丟棄重抽」的想法
// # 迴圈次數具隨機性（且符合幾何分佈）

// #總期望迴圈次數約為：
// # 1+ 10/9 + 10/8 + 10/7  = 4.79

function random2() {
  let x = "";
  while (x.length < 4) {
    const n = Math.floor(Math.random() * 10);
    if (!x.includes(String(n))) {x += n;}
  }
  return x;
}

console.log(random2()); 