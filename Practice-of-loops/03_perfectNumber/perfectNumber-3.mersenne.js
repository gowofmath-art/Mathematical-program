//  3.	迴圏的練習-perfectNumber
//  一個數字若等於其所有因數的總和，則此數為perfect number。
//  找出100以內所有的完美數。
//  說明：6的因數為1, 2, 3，6=1+2+3，故6為完美數。
//  法三：數論解法：利用梅森質數(Mersenne Prime)
//  時間複雜度：$O(2^{x/2})$
//  利用定理：若 2^p - 1 是一個梅森質數，那麼 2^(p-1)*(2^p - 1) 就必定是一個偶完美數

function prime(x) {
    if (x < 2) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {if (x % i === 0) return false;}
    return true;
}

function perfectNumber(x) {
    let perfectnumber = [];
    for (let p = 2; p < x; p++) {
        let m = 2**p - 1; 
        if (prime(m)) {
            let perfect = 2**(p - 1) * m;
            perfectnumber.push(perfect);
        }
    }
    return perfectnumber;
}

console.log(perfectNumber(10)); 