"use strict";
function palNum(num) {
    let reversed = 0;
    let remove = 0;
    let original = num;
    while (num != 0) {
        remove = num % 10;
        reversed = (reversed * 10) + remove;
        num = Math.floor(num / 10);
    }
    if (original === reversed) {
        return original + ' is a palidrome.';
    }
    else {
        return original + ' is not a palidrome.';
    }
}
function palStr(str) {
    let last = str.length - 1;
    for (let i = 0; i <= last; i++) {
        console.log(str.charAt(i) + ' and ' + str.charAt(last));
        if (str.charAt(i) != str.charAt(last)) {
            return str + ' is not a palindrome';
        }
        last--;
    }
    return str + ' is a palindrome.';
}
let num = 1232;
console.log(palNum(num));
let str = 'step on no pets';
console.log(palStr(str));
//# sourceMappingURL=index.js.map