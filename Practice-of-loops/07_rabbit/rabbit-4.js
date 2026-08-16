//  7.	迴圏的練習-rabbit
//  老王養了一群兔子，若三隻三隻一數，剩餘一隻；若五隻五隻一數，剩餘三隻；若七隻七隻一數，剩餘二隻。試問兔子最少有幾隻。

//  法四：中國剩餘定理 (Chinese remainder theorem，CRT)

function gcdExtended(a, b) {
    if (b === 0) {return [a, 1, 0];}

    const [gcd, x1, y1] = gcdExtended(b, a % b);
    const x = y1;
    const y = x1 - Math.floor(a / b) * y1;

    return [gcd, x, y];
}

function modInverse(a, m) {
    const [gcd, x] = gcdExtended(a, m);
    if (gcd !== 1) {
        throw new Error("模反元素不存在");
    }
    return ((x % m) + m) % m;
}

function crt(remainders, moduli) {
    let M = 1;
    for (const m of moduli) {M *= m;}

    let x = 0;

    for (let i = 0; i < moduli.length; i++) {
        const ai = remainders[i];
        const mi = moduli[i];
        const Mi = M / mi;
        const yi = modInverse(Mi, mi);
        x += ai * Mi * yi;
    }

    return ((x % M) + M) % M;
}

console.log(crt([1, 3, 2],[3, 5, 7]));