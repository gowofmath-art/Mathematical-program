//  1.	迴圏的練習-expression
//  利用for迴圏計算1^2-2^2+3^2-4^2+…+49^2-50^2的值。
// 法二：一個for迴圈


let s = 0 ;

for (let i = 1; i <= 50; i += 1) {s += (-1)**(i-1)*i**2; }

console.log(s);
