//predicate function
function isNonEmptyStringArray(arg: unknown) : arg is string[] {
    return Array.isArray(arg) && arg.length >= 1 && arg.every(el => typeof el === 'string')
}

let arr1: unknown = ['a', 'b', 'c']; //true
let arr2: unknown = ['test', 123]; //false

if(isNonEmptyStringArray(arr1)) {

console.log(arr1.length); 

}