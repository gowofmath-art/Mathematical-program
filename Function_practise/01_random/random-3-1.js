// (3)	產生四個由數字和大寫英文字母組成

function random3() {
    let x = "";
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 4; i++) {
        const index = Math.floor(Math.random() * characters.length);
        const n = characters[index];
        x += n;
    }

    return x;
}

console.log(random3());