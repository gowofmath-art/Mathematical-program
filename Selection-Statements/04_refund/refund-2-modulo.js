//  4.	選擇性敘述的練習-refund
//  輸入在某商店購物應付金額與實付金額。
//  實付金額小於應付金額，則印出”金額不足”。
//  實付金額等於應付金額，則印出”不必找錢”。
//  實付金額大於應付金額，則輸出找回金額最少的鈔票數和錢幣數。
//  假設幣值只有1000, 500, 100元紙鈔和50, 10, 5, 1元硬幣。
//  說明：若買了132元的商品，付1000元，應找回一張500元，三張100元，一個50元硬幣，一個10元硬幣，一個5元硬幣和三個1元硬幣。



function money(m, n) {
    if (m < n) return "金額不足";
    if (m === n) return "不必找錢";
    
    let change = m - n; 
    
    let a = Math.floor(change / 1000);
    change %= 1000; 
    
    let b = Math.floor(change / 500);
    change %= 500;
    
    let c = Math.floor(change / 100);
    change %= 100;
    
    let d = Math.floor(change / 50);
    change %= 50;
    
    let e = Math.floor(change / 10);
    change %= 10;
    
    let f = Math.floor(change / 5);
    change %= 5;
    
  let g = change;

  return `${a}張1000元, ${b}張500元, ${c}張100元, ${d}個50元, ${e}個10元, ${f}個5元, ${g}個1元`;
}

let m = 4096; 
let n = 2048; 
console.log(money(m, n));
