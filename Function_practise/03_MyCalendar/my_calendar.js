// 3. 日期的練習 - MyCalendar
// 輸入兩個整數：第一個代表年份，第二個代表月份，
// 列印出該年該月的月曆。
//
// 核心想法：計算從西元 1 年 1 月 1 日開始，
// 到指定月份 1 日之前總共經過多少天，藉此求出該月 1 日是星期幾。
// 閏年規則：每四年一閏、百年不閏、四百年又閏。

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const [y, m] = input;

function isLeap(y) {
    return ((y % 4 === 0 && y % 100 !== 0) ||y % 400 === 0);
}

function Calendar(y, m) {
    const mon = [31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30, 31];
    if (isLeap(y)) {mon[1] = 29;}

    const f = 1;
    const leapys =Math.floor((y-1) / 4) - Math.floor((y-1) / 100) + Math.floor((y-1) / 400);

    // 指定月份以前經過的天數
    const previousms = mon.slice(0, m - 1).reduce((total, days) => total + days, 0);

    // 從西元 1 年 1 月 1 日到指定月份以前經過的總天數
    const elapsedDays = 365 * (y-1) + leapys + previousms;

    // 計算指定月份的 1 日是星期幾
    const startDay = (f + elapsedDays) % 7;

    console.log(`這是${y}年${m}月的月曆`);
    console.log(" 日 一 二 三 四 五 六");

    // 印出 1 日之前的空格
    let calendarLine = "   ".repeat(startDay);

    // 印出日期
    for (let day = 1; day <= mon[m - 1]; day++) {
        calendarLine += String(day).padStart(2, " ") + " ";
        if ((day + startDay) % 7 === 0) {
            console.log(calendarLine.trimEnd());
            calendarLine = "";
        }
    }

    // 印出最後一週尚未輸出的日期
    if (calendarLine !== "") {
        console.log(calendarLine.trimEnd());
    }
}

// 檢查輸入是否合法
if (
    !Number.isInteger(y) ||
    !Number.isInteger(m) ||
    y < 1 ||
    m < 1 ||
    m > 12
) {
    console.log("請輸入有效的年份與月份，例如：2026 3");
} else {
    Calendar(y, m);
}