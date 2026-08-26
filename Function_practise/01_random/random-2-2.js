//  (2)	產生四個數字，不可以重覆
//  優化

function random2() {
    const digits = "0123456789".split("");

    for (let i = digits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [digits[i], digits[j]] = [digits[j], digits[i]];
    }

    return digits.slice(0, 4).join("");
}

console.log(random2());

// 解說：流程大概是這樣：
// "0123456789"
//       ↓ split
// ["0", "1", ..., "9"]
//       ↓ Fisher–Yates 洗牌
// ["7", "0", "4", "9", ...]
//       ↓ slice(0, 4)
// ["7", "0", "4", "9"]
//       ↓ join("")
// "7049"