// 5.	迴圈的練習-prime
// 輸入一正整數，找出所有小於或等於的質數。


function prime(n) {
    const P = [];
    for (let i = 2; i < n; i++) {
        let Prime = true;
        for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if (i % j === 0) {Prime = false;break;}
        }
        if (Prime) {P.push(i);}
    }
    return P;
}

console.log(prime(20));
