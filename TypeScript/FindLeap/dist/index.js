"use strict";
function isLeap(year) {
    if (year % 4 === 0) {
        return year + ' is a leap year.';
    }
    else
        return year + ' is not a leap year.';
}
console.log(isLeap(1994));
console.log(isLeap(2016));
console.log(isLeap(2022));
console.log(isLeap(1999));
console.log(isLeap(2020));
//# sourceMappingURL=index.js.map