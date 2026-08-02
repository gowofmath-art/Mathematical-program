// # 1.	選擇性敘述的練習-season
// # 輸入月份1~12月，利用switch判斷相對應的季節春、夏、秋、冬並印出。若不在此範圍則印出”輸入錯誤”。

let month = 9;

function season(month) {
    const seasons = ["冬天", "春天", "夏天", "秋天"];

    if (!Number.isInteger(month) || month < 1 || month > 12) {
        console.log("輸入錯誤");
        return;
    }

    const index = Math.floor((month % 12) / 3);
    console.log(`${month}月是 ${seasons[index]}`);
}

season(month);