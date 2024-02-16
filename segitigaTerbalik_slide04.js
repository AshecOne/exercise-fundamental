// No.1
function segitigaTerbalik (height) {
    let count = 0;
    for (let r = 0; r <= height; r++) {
        for (let q = 0; q < r; q++) {
            count++;
        }
    }

    let n = count;
    let hasil = "";
    for (let i = height; i > 0; i--) {
        let baris = "";
        for (let j = 1; j <= i; j++) {
            if (n < 10) {
                baris = baris + `0${n} `;
            }else {
                baris = baris + `${n} `
            }
            n--;
        }
        hasil = hasil + baris + `\n`;
    }
    return hasil;
}

console.log(segitigaTerbalik(4));