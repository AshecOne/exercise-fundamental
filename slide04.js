// No.1
function segitiga (height) {
    let n = 1;
    let hasil = "";
    for (let i = 0; i <= height; i++) {
        let baris = "";
        for (let j = 1; j <= i; j++) {
            if (n < 10) {
                baris = baris + `0${n} `;
            }else {
                baris = baris + `${n} `
            }
            n++;
        }
        hasil = hasil + baris + `\n`;
    }
    return hasil;
}

console.log(segitiga(6));

// No. 2
function FizzBuzz(n) {
    let hasil = [];
    for (let i = 1; i <= n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            hasil.push("FizzBuzz");
        } else if (i%5 === 0) {
            hasil.push("Buzz");
        } else if (i%3 === 0 ) {
            hasil.push("Fizz");
        } else {
            hasil.push(i);
        }
    }
    return hasil;
}

console.log(FizzBuzz(30));

// No. 3
function BMI(weight, height) {
    const bmi = weight/(height*height);
    let hasil;
    if (bmi < 18.5) {
        hasil = "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        hasil = "ideal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        hasil = "overweight";
    } else if (bmi >= 30 && bmi <= 39.9) {
        hasil = "very overweight";
    } else {
        hasil = "obesity";
    }
    console.log(bmi);
    return hasil;
}

console.log(BMI(130, 1.80));

// No. 4
function hapusGanjil(arr) {
    let arrBaru = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrBaru.push(arr[i]);
        }
    }
    return arrBaru;
}

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 2];
console.log(hapusGanjil(angka));

// No. 5
function customSplit(str, separator = " ") {
    let arr = [];
    let kata = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === separator && kata !== separator) {
            arr.push(kata);
            kata = "";
        } else if (str[i] !== separator) {
            kata += str[i];
        }
    }

    if (kata !== '') {
        arr.push(kata);
      }

    return arr;
}

console.log(customSplit("Hello World", ));
console.log("Hello World".split(""));