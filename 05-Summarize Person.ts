//Опционален параметър се отбелязва като след името поставяме  ? 
function sumarizePersoon(id: number,
    firstName: string,
    lastName: string,
    age: number, middleName?: string,
    //хобитата са стрингов масив
    hobbies?: string[],
    //workInfo ни е tuple с два елемента първия ни е str, а втория num
    //tuple е масив с точен брой елементи и точни типове по позиции
    workInfo?: [string, number]
): [number, string, number, string, string] {

    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;

    //тернарен оператор
    //Проверява дали променливата hobbies съществува и не е null, undefined, false, 0, "" или NaN.
    //Ако hobbies има стойност (например е масив), се изпълнява първата част след въпросителната (hobbies.join(', ')).
    const hobbiesStr = hobbies ? hobbies.join(', ') : '-';

    //`${workInfo[0] -> ${workInfo[1]}}` е интерполиран стринг
    // workInfo[0] -> string
    // workInfo[1] -> number
    const jobStr = workInfo ? `${workInfo[0]} -> ${workInfo[1]}`: '-' ;

    return [
        id,
        fullName,
        age,
        hobbiesStr,
        jobStr
    ]

}
console.log(sumarizePersoon(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales    Consultant', 2500]));
