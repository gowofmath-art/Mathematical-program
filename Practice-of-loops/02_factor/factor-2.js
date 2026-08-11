//  2.	迴圏的練習-factor
//  輸入一正整數，求其所有的因數。
//  說明：36的因數為1, 2, 3, 4, 6, 9, 12, 18, 36。
//  法二：檢查到一半即可：時間複雜度 O(n^(1/2))

function f(n) {
    let factor = [];

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) 
        {if (n % i === 0) {factor.push(i);
            if (i !== n / i) {factor.push(n / i);}
        }
    }
    return factor;
}

let n = 18;
console.log(f(n));