//  使用蔡勒公式（Zeller's congruence）
//  直接告訴星期幾 (星期日 = 0 依序下去)
//  在輸出  幾年幾月的月曆

// 為了在 JavaScript 環境執行，使用固定的變數模擬 Python 的 input()
let y = 2026; 
let m = 9;    

console.log(`這是${y}年${m}月的月曆`);

let D = '日一二三四五六';
let header = "";
for (let n of D) {
    header += n.padStart(2, ' ');
}
console.log(header);

function Zeller(y, m, d) {
    if (m < 3) {
        m += 12;
        y -= 1;
    }
    let y1 = y % 100;
    let y2 = Math.floor(y / 100);
    
    let w = (y1 + Math.floor(y1 / 4) + Math.floor(y2 / 4) - 2 * y2 + Math.floor(13 * (m + 1) / 5) + d - 1) % 7;
    
    return (w % 7 + 7) % 7;
}

function is_leap(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

function calendar(y, m) {
    let mon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (is_leap(y)) {
        mon[1] = 29;
    }
    let start_day = Zeller(y, m, 1);
    
    // JS 內建 console.log 必定會換行，因此用字串拼接來模擬 Python 的 print(..., end="")[cite: 1]
    let line = "   ".repeat(start_day); 
    
    for (let i = 1; i <= mon[m - 1]; i++) {
        line += i.toString().padStart(2, ' ') + " "; 
        if ((i + start_day) % 7 === 0) {
            console.log(line);
            line = ""; 
        }
    }
    if (line.length > 0) {
        console.log(line);
    }
}

calendar(y, m);