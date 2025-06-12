type httpCode = {code: 200 | 201 | 301, text: string}
type httpCodeChr = {code: 400 | 404 | 500, text: string, printChars?: number}

function httpCodes(httpCode: httpCode | httpCodeChr){
    switch(httpCode.code){
        case 200:
        case 201:
        case 301:console.log(httpCode.text); return;
        
        case 400:
        case 404:
        case 500:console.log(httpCode.text.slice(0, httpCode.printChars));
        
    }


}

console.log(httpCodes({ code: 200, text: 'OK'})); // OK
console.log(httpCodes({ code: 201, text: 'Created'})); // Created
console.log(httpCodes({ code: 400, text: 'Bad Request', printChars: 4})); // Bad
console.log(httpCodes({ code: 404, text: 'Not Found'})); // Not Found
console.log(httpCodes({ code: 404, text: 'Not Found', printChars: 3})); // Not
console.log(httpCodes({ code: 500, text: 'Internal Server Error', printChars: 1})); // I
//console.log(httpCodes({ code: 200, text: 'OK', printChars: 1})); // не миннава