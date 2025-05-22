enum Days {
  Monday = 1,       // Започваме от 1, а не от 0 (по подразбиране enums започват от 0)
  Tuesday,          // Следва автоматично 2
  Wednesday,        // 3
  Thursday,         // 4
  Friday,           // 5
  Saturday,         // 6
  Sunday            // 7
  }

//Когато функцията не връща нищо пишем тип void
function getDayNumber(dayName: string): void {

  // keyof Day включва само числовите ключове
  // за да разполагаме с числовите и стринговите ключове keyof typeof Day
  console.log(Days[dayName as keyof typeof Days] || 'error');
  
}

console.log(getDayNumber('Monday'));
console.log(getDayNumber('Friday'));
console.log(getDayNumber('Sunday')); 