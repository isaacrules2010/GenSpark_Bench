function isLeap(year:number){
    if(year % 4 === 0){
        return year + ' is a leap year.';
    }
    else return year + ' is not a leap year.';
}

console.log(isLeap(1994)); //should be false
console.log(isLeap(2016)); //should be true
console.log(isLeap(2022)); //should be false
console.log(isLeap(1999)); //should be false
console.log(isLeap(2020)); //should be true