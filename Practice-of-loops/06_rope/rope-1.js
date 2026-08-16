// 6.	迴圏的練習-rope
// 若有一條繩子長3000公尺，每天剪去一半的長度，需多少天繩子的長度會短於5公尺。
// 法一：用while 迴圈

function rope() {
    let n = 3000;
    let count = 0;
    while (n > 5) {
        n = n/2;
        count = count + 1
    }
    return count
}

console.log(rope())

