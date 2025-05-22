//Когато функцията не връща нищо пишем тип void
function dayOfWeek(dayNum: number): void {

    enum Days {
        //Пишем = 1, защото по default  всяко enum започва от 0; 
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
// Използваме || операратора
    console.log(Days[dayNum] || 'error');
    

}

console.log(dayOfWeek(1));
console.log(dayOfWeek(-1));
console.log(dayOfWeek(5));