function friday13(arr: unknown[]): void {
    enum Months {
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        Octomber,
        November,
        December

    }

    for(const date of arr){
        if(date instanceof Date){
            const monthDay = date.getDate();
            const weeklyDay = date.getDay();
            const monthNum = date.getMonth();


            if (monthDay === 13 && weeklyDay === 5){
                console.log(`${monthDay}-${Months[monthNum]}-${date.getFullYear}`);
        
            }
        }
    }

}
friday13([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
])