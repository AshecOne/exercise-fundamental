// No. 1
let length = 5;
let width = 3;
let areaRectacngle = length*width;
console.log(areaRectacngle);

// No. 2
let perimeterRectangle = 2*length + 2*width;
console.log(perimeterRectangle);

// No. 3
let radius =5;
let diameter = 2*radius;
let circumferenceCircle = 2*Math.PI*radius;
let areaCircle = Math.PI*radius**2;
console.log(diameter);
console.log(circumferenceCircle);
console.log(areaCircle);

// No. 4
let alpha = 80;
let betha = 65;
let gamma = 180-alpha-betha;
console.log(`${gamma} derajat`);

// No. 5
let date1 = new Date();
let date2 = new Date("2024-01-18");
let diff = Math.abs(date2 - date1);
let differenceDate = diff / (1000*60*60*24)
console.log(`${Math.floor(differenceDate)} Hari`);

// No. 6
let days = 360;
const aYear = 365;
const aMonth = 30;
let convertYears = Math.floor(days / aYear);
let afterYears = Math.floor(days % aYear);
let convertMonths = Math.floor(afterYears / aMonth);
let afterMonths = Math.floor(afterYears % aMonth);
console.log(`${convertYears} Tahun, ${convertMonths} Bulan, ${afterMonths} Hari`);

