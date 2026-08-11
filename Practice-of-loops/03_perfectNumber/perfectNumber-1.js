//  3.	迴圏的練習-perfectNumber
//  一個數字若等於其所有因數的總和，則此數為perfect number。
//  找出100以內所有的完美數。
//  說明：6的因數為1, 2, 3，6=1+2+3，故6為完美數。
//  法一：正常作法雙for迴圈
//  可以自己調整x是多少。
// 時間複雜度為O(n^2)

function perfectnumber(x) {
    let perfect = [];
    for (let n = 2; n < x; n++) {
        let p = 0;
        for (let i = 1; i < n; i++) {if (n % i === 0) {p = p + i;}}
        if (p === n) {perfect.append ? perfect.append(n) : perfect.push(n);}}
    return perfect;}

console.log(perfectnumber(1000));