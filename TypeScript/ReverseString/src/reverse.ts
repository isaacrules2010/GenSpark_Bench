function reverse(str:string):string{
    let reversed:string='';
    for(let i:number = str.length-1; i >= 0; i--){
        reversed += str.charAt(i);
        // console.log(reversed);
    }
    return str+' reversed is: '+reversed;
}

let input:string = "this is a test string";
console.log(reverse(input));