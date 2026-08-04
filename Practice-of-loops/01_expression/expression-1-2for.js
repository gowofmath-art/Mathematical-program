//  1.	迴圏的練習-expression
//  利用for迴圏計算1^2-2^2+3^2-4^2+…+49^2-50^2的值。
//  法一： 2個for迴圈


let s_1 = 0;
let s_2 = 0;

for (let i = 1; i <= 50; i += 2) {s_1 += i ** 2; }

for (let j = 2; j <= 50; j += 2) {s_2 += j ** 2;}

console.log(s_1 - s_2);
