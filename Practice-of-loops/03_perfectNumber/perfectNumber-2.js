//  3.	迴圏的練習-perfectNumber
//  一個數字若等於其所有因數的總和，則此數為perfect number。
//  找出100以內所有的完美數。
//  說明：6的因數為1, 2, 3，6=1+2+3，故6為完美數。
//  法二：i的部分只檢查到n的平方根，大大降低時間複雜度。 O(n^)
//  時間複雜度為O(n*n^(1/2))

function perfectNumber(x) {
    let perfect = [];
    for (let n = 2; n < x; n++) {
        let p = 0;
        for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i === 0) {
                p = p + i;
                if (i !== Math.floor(n / i) && i !== 1) {p = p + Math.floor(n / i);}}}
        if (p === n) {perfect.push(n);}}
    return perfect;}

console.log(perfectNumber(1000));

// 一行版本
function perfectNumber(x) { return Array.from({ length: x - 2 }, (_, i) => i + 2).filter(n => [...new Set(Array.from({ length: Math.floor(Math.sqrt(n)) }, (_, i) => i + 1).filter(i => n % i === 0).flatMap(i => [i, n / i]).filter(i => i !== n))].reduce((a, b) => a + b, 0) === n); }

console.log(perfectNumber(1000)); 

// 必須透過 Array.from() 來建立連續數字陣列，並利用 .flatMap() 達到類似 Python 多重 for 的展開效果，最後再傳入 new Set() 完成去重與 reduce 求和。