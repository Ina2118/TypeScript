//иметоНаПроменливата : вида на променливата = стойноста на променливата;
let firstName: string = 'Gosho';
let lastName: string = "Georgiev";
let age: number = 25;
let hasGraduated: boolean = false;

//Не може да съдържа числа понеже имаме масив от тип str
let skills: string[] = ['css', 'html', 'js'];

//Tuple - масив с фиксиран брой елементи, чиито типове са известни
let certificateInfo :[string, number, boolean] = ["MySql",
    2025,
    true
];

//Имаме масив в който елементите трябва или да са числа или стрингове;
let strNumArr : Array<number | string> = ['pen4o', 45];
let strOrNum : (string | number)[] = ['pen4o', 45];

//Обект
let pointOne : {x: number, y: number} = {x: 0, y: 0};


enum Directions {
    Up,
    Down,
    Left,
    Right
}


function movePoint (point:  {x: number, y: number}, moveDirection: Directions){
    if(moveDirection  === Directions.Up){
        return {x: point.x, y: point.y + 1};
    }else if (moveDirection === Directions.Down){
        return {x: point.x, y: point.y - 1};
    }else if (moveDirection === Directions.Left){
        return {x: point.x - 1, y: point.y };
    }else if (moveDirection === Directions.Right){
        return {x: point.x + 1, y: point.y};
    }
}

let point = {x: 0, y: 0};
//При стартиране на резултата през terminal пишем командата ts-node име-на-файла.ts
//console.log(movePoint(point, Directions.Right));

//?опционален параметър
//имаме типизация на параметрите
//В typescript е хубаво да върнем и типизираната стойност
function greetUser(username: string, addHello?: boolean) : string{
    if(addHello === true){
        return `Hello ${username}`;
    }else{
        return username;
    }
}

//console.log(greetUser('Pen4o', false));

// type predicate function
function isNumber(val: string | number) : val is number{
    return typeof val === 'number';

}


function formatData(a:string| number, b:string | number){
    if(isNumber(a) && isNumber(b)){
        console.log(a + b);
        
    }else {
        console.log(`${a}<->${b}`);
    }
}
