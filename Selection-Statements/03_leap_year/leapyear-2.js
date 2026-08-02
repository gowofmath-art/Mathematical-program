//  3.	選擇性敘述的練習-leapYear
//  輸入一西元年，如2015。判斷此年份是否為閏年。
//  提示：每四年一閏，每百年不閏，每四百年一閏。

function leapyear(y) {
    return (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) ? "閏年" : "非閏年";
}

console.log(leapyear(2026));
