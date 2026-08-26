//  1.	使用亂數產生驗証碼，分別使用三個函式完成-verify
//  (1)	產生四個數字，可以重覆

function random1() {
  let x = "";
  for (let i = 0; i < 4; i++) {
    const n = Math.floor(Math.random() * 10); 
    x += n; 
  }
  return x;
}

console.log(random1()); 
