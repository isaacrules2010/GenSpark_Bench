"use strict";
function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
        console.log(reversed);
    }
    return str + ' reversed is: ' + reversed;
}
let input = "this is a test string";
console.log(reverse(input));
//# sourceMappingURL=reverse.js.map