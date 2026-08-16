//  7.	迴圏的練習-rabbit
// 老王養了一群兔子，若三隻三隻一數，剩餘一隻；若五隻五隻一數，剩餘三隻；若七隻七隻一數，剩餘二隻。試問兔子最少有幾隻。
// 法一：單純的for迴圈

function rabbit() {
    for (let x = 1; x <= 105; x++) {
        if (x % 3 === 1 && x % 5 === 3 && x % 7 === 2) {return x;}
    }
}

console.log(rabbit()); 

