// No.1
let input = 9;
let result="";
const x = 10;

for (i = 1; i <= x; i++) {
    let operasi = input*i;
    result = result + `${input}x${i} = ${operasi}\n`;
}
console.log(result);

// No.2
var originalString = "madam";

var cleanedString = originalString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

var isPalindrome = cleanedString === cleanedString.split('').reverse().join('');

console.log(originalString + " -> " + (isPalindrome ? "palindrome" : "not a palindrome"));

// No.3
let cm = 100000;
let km = cm/100000;
console.log(`${cm} cm sama dengan ${km} km`);

// No.4
let uang = 1000;
let convert= uang.toLocaleString("id", {
    style: "currency", 
    currency: "IDR",
});

console.log(convert);

// No.5
let setring = "Hello world";
let searchString = "ell";
let resultString = setring.replace(searchString, '');
console.log(resultString);  // "Ho world"

// No.6
let lowerCaseString = "hello world";
let titleCaseString = lowerCaseString.replace(/\b\w/g, char => char.toUpperCase());
console.log(titleCaseString);  // "Hello World"

// No.7
let stringToReverse = "hello";
let reversedString = stringToReverse.split('').reverse().join('');
console.log(reversedString);  // "olleh"
