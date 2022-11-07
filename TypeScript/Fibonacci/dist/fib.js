"use strict";
function fib(n) {
    let first = 0;
    let second = 1;
    let temp = 0;
    if (n === 0) {
        return first;
    }
    if (n === 1) {
        return second;
    }
    for (let i = 2; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }
    return second;
}
console.log('the 7th fib number is: ');
console.log(fib(7));
//# sourceMappingURL=fib.js.map