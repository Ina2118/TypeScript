//input -> array: string[]
// output -> is returned as a tupel: [string, number] 
function convertArray(words: string[]): [string, number] {
//Правим си променлива за конкатенирания текст
    const text = words.join('');

    //1 елемент в този tuple е конкатенирания текст
    //2 елемент е дължината на конкатенирания текст
    return [
        text,
        text.length
    ];

}

console.log(convertArray(['How', 'are', 'you?']));