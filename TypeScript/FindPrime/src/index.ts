function findPrime(num: number){
    // console.log('finding prime...');

    if(num <= 1) return false;
    if(num === 2) return true;
    for(let i: number = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

for(let num: number = 1; num <= 10; num++){
    if(findPrime(num)){
        console.log(num + ' is Prime.')
    }
    else{
        console.log(num + ' is not Prime.')
    }
}