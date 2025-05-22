// Как се създават tuple:
// let tuple: [string, number]; -> винаги подваме параметрите както сме ги задали
// tuple = ['hello', 22]; - valid -> защото първо сме подали str след което num
// tuple = [5, 'hi']; - invalid -> защото първо сме подали num след което str

function formatPerson(person: [string, number]): string{
    return `Hello, my name is ${person[0]} and my age is ${person[1]}`;
}

console.log(formatPerson(['Ivan', 20])); //Hello, my name is Ivan and my age is 20             
console.log(formatPerson(['Joro', 30])); //Hello, my name is Joro and my age is 30           

// console.log(formatPerson(['Ivan', 20, 'Ivanov']));    TS ERROR -> дава грешка защото имаме повече от 2 параметара
// console.log(formatPerson(['Joro', '25']));      TS ERROR -> дава грешка защото втория параметър е str , а не num
// console.log(formatPerson([]));    TS ERROR -> дава грешка защото подаваме празен масив(empty tuple)