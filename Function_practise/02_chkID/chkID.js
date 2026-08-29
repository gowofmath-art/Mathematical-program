// 檢查身分證號碼是否正確 - chkID

// 依據中華民國國民身分證統一編號邏輯進行字串校驗：
// (1) 檢查是否有十個字元
// (2) 檢查第一個字元是否為英文字母，若為小寫則轉換成大寫
// (3) 檢查第二個字元是否為 1 或 2
// (4) 檢查第三個至第十個字元是否為數字
// (5) 檢查最後一個檢查碼是否正確

// 檢查碼規則：
// 1. 開頭英文字母依照對應表轉換為兩位數字。
// 2. 字母轉換後的十位數乘以 1，個位數乘以 9。
// 3. 後續前八個數字依序乘以 8、7、6、5、4、3、2、1。
// 4. 加上最後一碼檢查碼後，總和必須是 10 的倍數。

function chkID(n) {
    n = n.toUpperCase();
    const id = Array.from(n);

    const numbers = "0123456789";
    const englishLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const idList = [10, 11, 12, 13, 14, 15, 16, 17, 34,18, 19, 20, 21, 22, 35, 23, 24, 25,26, 27, 28, 29, 32, 30, 31, 33];

    if (id.length !== 10) {return "不准輸入";}

    if (!englishLetters.includes(id[0])) {return "不正確";}

    if (id[1] !== "1" && id[1] !== "2") {return "不正確";}

    for (let i = 1; i < id.length; i++) {
        if (!numbers.includes(id[i])) {return "不正確";}
    }

    // Python：ord(id[0]) - 65
    const index =id[0].charCodeAt(0) - "A".charCodeAt(0);

    const letterNumber = idList[index];

    // Python 的 // 是整除；JavaScript 使用 Math.floor()
    const letterSum =
        Math.floor(letterNumber / 10) + (letterNumber % 10) * 9;

    let sum = letterSum;

    for (let i = 1; i < 9; i++) {sum += Number(id[i]) * (9 - i);}

    const checkCode = (10 - (sum % 10)) % 10;

    if (Number(id[9]) !== checkCode) {return "不正確";}
    return "正確";
}


// 從終端機讀取輸入，對應 Python 的 input()
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("請輸入身分證號碼：", (n) => {
    console.log(chkID(n.trim()));
    rl.close();
});
