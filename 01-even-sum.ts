
function isEvenSum(a: number, b: number, c: number): boolean {
    let sum = a + b + c;
    if (sum % 2 === 0) {
        return true;

    } else {
        return false;
    }
}

console.log(isEvenSum(1,2,3));
console.log(isEvenSum(2,2,3));



//Типизираме параметрите и върнатата стойност
function checkNumbers(num1: number, num2: number, num3: number): boolean{
    const sum = num1 + num2 + num3;
    //това е булев израз и ще ни върне true, ако израза е верен  и false ако не е верен
    return sum % 2 === 0;

}

console.log(checkNumbers(1, 2, 3));
console.log(checkNumbers(2, 2, 3));

