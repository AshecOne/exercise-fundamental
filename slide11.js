// No. 1
let excelSheet = (str) => {
    let alfabet = ["A", "B", "C", "D", "E", "F",
                   "G", "H", "I", "J", "K", "L",
                   "M", "N", "O", "P", "Q", "R",
                   "S", "T", "U", "V", "W", "X",
                   "Y", "Z"];
                   
    let num = 0;

    for (let i = 0; i < str.length; i++) {
        let charValue = alfabet.indexOf(str[i]) + 1;
        num = num * 26 + charValue;
    }

    return num;
}

let cuontoh = "ZZZ";
console.log(excelSheet(cuontoh));

// No. 2
let singleOne = (arr) => {
    let newArr = arr.sort((a, b) => a - b);
    let result = []
    for (let i = 0; i < newArr.length; i++) {
        if ((i === 0 || newArr[i] !== newArr[i - 1]) && (i === newArr.length - 1 || newArr[i] !== newArr[i + 1])) {
            result.push(newArr[i]);
        }
    }
    return result.join(', ')
}

let misal = [2,2,1];
console.log(singleOne(misal));
let misal1 = [4,2,1,2,1];
console.log(singleOne(misal1));
let misal2 = [1];
console.log(singleOne(misal2));

// No. 3
function isAnagram(text1, text2) {
    if (text1.length !== text2.length) {
        return false;
    }
    const count = {};

    for (let i = 0; i < text1.length; i++) {
        const simpanHuruf = text1[i];
        // console.log(simpanHuruf);
        count[simpanHuruf] = (count[simpanHuruf] || 0) + 1;
        // console.log(count[simpanHuruf]);
    }

    for (let i = 0; i < text2.length; i++) {
        const banding = text2[i];
        if (!count[banding]) {
            return false;
        }
        count[banding]--;
        // console.log(count[banding]);
    }

    for (let huruf in count) {
        if (count[huruf] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("kakak", "abang"));
console.log(isAnagram("adik", "dika"));

// No. 4
function naikTangga(n) {
    if (n <= 1) {
        return 1;
    }
    let cara = [1, 1];

    for (let i = 2; i <= n; i++) {
        cara[i] = cara[i - 1] + cara[i - 2];
    }

    return cara[n];
}

console.log(naikTangga(2));
console.log(naikTangga(3));
console.log(naikTangga(10));

// No. 4 dengan print langkah
function caraNaikTangga(n) {
    let simpanCara = [];
    let counter = 1;

    if (n <= 0) {
        return 'Anak tangga tidak valid!';
    }
  
    function tulisCara(arr = [], jumlahTangga = n) {
        if (jumlahTangga === 0) {
            simpanCara.push('cara ' + counter + ': ' + arr.join(' + ') + ' = ' + n);
            counter++;
            return;
        }
        if (jumlahTangga >= 1) {
            tulisCara([...arr, 1], jumlahTangga - 1);
        }
        if (jumlahTangga >= 2) {
            tulisCara([...arr, 2], jumlahTangga - 2);
        }
    }

    tulisCara();

    return { langkah: simpanCara, totalCara: simpanCara.length };
}

function toString(input) {
    return input.join('\n');
}
  
let n = 10;
if (typeof caraNaikTangga(n) === 'string') {
    console.log(caraNaikTangga(n));
} else {
    console.log(`Jumlah cara menaiki ${n} tangga (Total = ${caraNaikTangga(n).totalCara}):\n${toString(caraNaikTangga(n).langkah)}`);
}