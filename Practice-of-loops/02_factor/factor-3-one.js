//  2.	迴圏的練習-factor
//  輸入一正整數，求其所有的因數。
//  說明：36的因數為1, 2, 3, 4, 6, 9, 12, 18, 36。
//  法三：讓list照順序排好

function f(n) {
    const A = [];
    const B = [];

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {A.push(i);
            if (Math.floor(n / i) !== i) {B.push(Math.floor(n / i));}
        }
    }
    
    // B.reverse() 轉為由小到大，再用 concat 拼接到 A 後面
    return A.concat(B.reverse());
}

console.log(f(36));
console.log(f(16)); 

const f1 = n => [...new Set(Array.from({ length: Math.floor(Math.sqrt(n)) }, (_, i) => i + 1).flatMap(i => n % i === 0 ? [i, n / i] : []))].sort((a, b) => a - b);

console.log(f1(25)); 
console.log(f1(40)); 

// 拆解說明：
// 1. Array.from(...) 生成 $1 \dots \lfloor\sqrt{n}\rfloor$ 的陣列。
// 2. flatMap(...) 遇到能整除的 $i$，就回傳成對陣列 
// 3. [i, n / i] 並自動展平；否則回傳 []。
// 4. new Set(...) 過濾完全平方數產生的重複元素。
// 5. .sort((a, b) => a - b) 做數值遞增排序。