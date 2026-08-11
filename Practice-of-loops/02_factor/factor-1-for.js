//  2.	迴圏的練習-factor
//  輸入一正整數，求其所有的因數。
//  說明：36的因數為1, 2, 3, 4, 6, 9, 12, 18, 36。
//  法一：基本for迴圈

function f(n) {
    for (let i = 1; i < n; i++) {if (n % i === 0) {console.log(i)}}
    return n;
}

const n = 36;
console.log(f(n));