"use strict";
function findPrime(num) {
    if (num <= 1)
        return false;
    if (num === 2)
        return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
for (let num = 1; num <= 10; num++) {
    if (findPrime(num)) {
        console.log(num + ' is Prime.');
    }
    else {
        console.log(num + ' is not Prime.');
    }
}
//# sourceMappingURL=index.js.map