function fib(n:number):number{
    let first:number = 0;
    let second:number = 1;
    let temp:number = 0;

    if(n === 0){
        return first;
    }
    if(n === 1){
        return second;
    }

    for(let i:number = 2; i <= n; i++){
        temp = first+second;
        first = second;
        second = temp;
    }
    return second;
}

console.log('the 7th fib number is: ');
console.log(fib(7));