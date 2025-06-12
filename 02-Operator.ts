// Union type | -> променливата може да е от тип string или number или string[]

function operators (param: string | number |string[], operation:'Index' | 'Length' | 'Add' , operand: number){
    
    //Type narrowing
    if(operation === 'Index' && typeof param !== 'number'){
        // върни стойността от param на позиция operand
        return param[operand];
    }

    //Type narrowing
    if(operation === 'Length' && typeof param !== 'number'){
        return param.length % operand;
    }

    //Type narrowing
    if(operation === 'Add' && typeof param !== 'number'){
        return param.length % operand;
    }

    // Type narrowing
    if(operation === 'Add' && !Array.isArray(param)){

        return Number(param) + operand;
    }
}

console.log(operators(['First', 'Second', 'Third'], 'Index', 1)); // Second
console.log(operators('short string1', 'Length', 5)); // 3
console.log(operators('string', 'Index', 1)) // t

// Type narrowing в TypeScript е процесът на ограничаване 
// (или „стесняване“) на типа на дадена променлива 
// в рамките на даден обхват от кода въз основа на някаква 
// проверка или условие.
// Това позволява на TypeScript да разбере по-точно какъв е типът на стойността в конкретен момент