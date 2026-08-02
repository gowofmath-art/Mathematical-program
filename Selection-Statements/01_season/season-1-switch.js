// # 1.	選擇性敘述的練習-season
// # 輸入月份1~12月，利用switch判斷相對應的季節春、夏、秋、冬並印出。若不在此範圍則印出”輸入錯誤”。

let month = 9;

function season(month) {
    switch (month) {
        case 3:
        case 4:
        case 5:
            console.log(month + "月是 春天");
            break;
        case 6:
        case 7:
        case 8:
            console.log(month + "月是 夏天");
            break;
        case 9:
        case 10:
        case 11:
            console.log(month + "月是 秋天");
            break;
        case 12:
        case 1:
        case 2:
            console.log(month + "月是 冬天");
            break;
        default:
            console.log("輸入錯誤，請輸入 1~12 之間的數字");
    }
}

season(month);