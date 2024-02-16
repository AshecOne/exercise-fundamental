// No. 1 manual
function sortArrManual(arr) {
    let lowest = arr[0];
    let highest = arr[0];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (highest < arr[i]) {
            highest = arr[i];
        } else if (arr[i] < lowest) {
            lowest = arr[i];
        }
        total += arr[i];
    }
    let average = total/arr.length

    return {lowest, highest, average};
}

let arr = [12,5,23,18,4,45,32];
console.log(sortArrManual(arr));

// dengan fungsi sort
function sortArr(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let lowest = sortedArr[0];
    let highest = sortedArr[sortedArr.length - 1];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    let average = total / arr.length;

    return { lowest, highest, average };
}

console.log(sortArr(arr));

// No. 2
function arrToStr(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            str += `${arr[i]}, `;
        }else {
            str += `and ${arr[i]}`;
        }
    }
    return str;
}

let contoh = ["apple", "banana", "cherry", "date"];
console.log(arrToStr(contoh));

// No. 4
function jumlahArr(arr1, arr2) {
    let arr = [];
    let panjang;
    if (arr1.length < arr2.length) {
        panjang = arr2.length;
    } else {
        panjang = arr1.length;
    }
    for (let i = 0; i < panjang; i++) {
        if (arr1[i] && arr2[i]) {
            arr[i] = arr1[i] + arr2[i];
        }else if (arr1[i]) {
            arr[i] = arr1[i];
        }else if(arr2[i]) {
            arr[i] = arr2[i];
        }
    }
    return arr;
}

let arr1 = [1, 2, 3, 5, 9];
let arr2 = [3, 2, 1, 5, 6, 7, 9];
console.log(jumlahArr(arr1, arr2));

// No. 5
function  newElement(arr, number = 0) {
    let newArr = [];
    let sama = true;
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
        if (arr[i] === number) {
            sama = false;
        }
    }
    if (sama) {
    newArr.push(number);
    }
    return newArr;
}

let tes = [1, 2, 3, 4];
console.log(newElement(tes, 4));
console.log(newElement(tes, 7));