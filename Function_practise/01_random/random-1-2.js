//  1.	使用亂數產生驗証碼，分別使用三個函式完成-verify
//  (1)	產生四個數字，可以重覆
// 這個做法反而較為慢一點
// Array.from() 會有語法糖開銷，每次產生元素都要觸發一次箭頭函式的呼叫，建立完陣列後，還需調用 .join("") 對陣列做第二次走訪才能轉為字串。

const random1Functional = () =>
  Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join("");

console.log(random1Functional());