//  4.	迴圏的練習-amstrong
// Amstrong數是指一個三位數的整數，其各位數之立方和等於該數本身。
// 找出所有的Amstrong數。
// 說明： $153=1^3+5^3+3^3$，故153為Amstrong數。
// 法三：用空間換時間
// 由於數字只有 0 到 9，直接建立一個查詢表，預先算好 0 到 9 的三次方。再利用陣列索引的存取速度極快，這能將乘法與次方運算降級為簡單的記憶體讀取與加法。

function Amstrong() {
    const cube = Array.from({ length: 10 }, (_, i) => i ** 3);
    let amstrong = [];
    
    for (let a = 1; a < 10; a++) {
        let a_cube = cube[a]; 
        for (let b = 0; b < 10; b++) {
            let b_cube = cube[b]; 
            for (let c = 0; c < 10; c++) {
                let n = 100 * a + 10 * b + c;
                if (n === a_cube + b_cube + cube[c]) {
                    amstrong.push(n); 
                }
            }
        }
    }
    return amstrong;
}

console.log(Amstrong());
