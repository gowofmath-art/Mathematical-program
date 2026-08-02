//  2.	選擇性敘述的練習-salary
//  輸入便利商店工讀生的工作時數，並計算其薪資。
//  60小時以內，時薪120元。
//  61~80小時，以時薪1.25倍計算。
//  81小時以上，以時薪1.5倍計算。
//  說明：薪資以累計方式計算。若工時為90小時，則薪資為60*120 + 20*120*1.25 + 10*120*1.5元。

function salary(hour) {
    if (hour <= 60) { console.log(hour * 120) };
    if (hour <= 80 && hour > 60) { console.log(60 * 120 + (hour - 60) * 120 * 1.25) };
    if (hour >= 81) { console.log(60 * 120 + 20 * 120 * 1.25 + (hour - 80) * 120 * 1.5) };
}

let hour = 100;
console.log(salary(hour));