//  4.	迴圏的練習-amstrong
// Amstrong數是指一個三位數的整數，其各位數之立方和等於該數本身。
// 找出所有的Amstrong數。
// 說明： $153=1^3+5^3+3^3$，故153為Amstrong數。
// 法一：基本for迴圈

function Amstrong() {
    let amstrong = [];
    for (let n = 100; n <1000; n++) {
        let a = Math.floor(n / 100);
        let b = Math.floor(n / 10) - a*10;
        let c = n -a*100 - b*10;
        if (n === a**3 + b**3 + c**3) {amstrong.push(n);}
    }
    return amstrong;
}

console.log(Amstrong());