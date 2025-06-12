function optinalMultiplier(param1? : string | number , param2? : string | number, param3?: string | number) {

// nullish coalescing операторa – ?? -> let num1 = param1 ?? Number(param1);
//Ако param1 не е null или undefined,тогава върни num1 = param1 
//Ако param1 е null или undefined,тогава върни Number(param1)


let num1 = param1 == undefined ? 1 : Number(param1);
let num2 = param2 == undefined ? 1 : Number(param2);
let num3 = param2 == undefined ? 1 : Number(param3);

return num1 * num2 * num3;

}

console.log(optinalMultiplier('3', 5, '10')); // 150
console.log(optinalMultiplier(undefined, 2, 3)); // 6