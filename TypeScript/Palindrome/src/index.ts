function palNum(num: number): string {
    let reversed:number = 0;
    let remove:number = 0;
    let original:number = num;
    while (num != 0){
        remove = num % 10;
        reversed = (reversed*10)+remove;
        num = Math.floor(num / 10);
    }

    if (original === reversed){
        return original+' is a palidrome.';
    }
    else{
        return original+' is not a palidrome.';
    }
}

function palStr(str:string):string{
    let last:number = str.length-1;

    for(let i:number = 0; i <= last; i++){
        console.log(str.charAt(i) + ' and ' +str.charAt(last))
        if(str.charAt(i) != str.charAt(last)){
            return str+' is not a palindrome'
        }
        last--;
    }

    return str+' is a palindrome.'
}

let num: number = 1232;
console.log(palNum(num));

let str:string = 'step on no pets';
console.log(palStr(str));