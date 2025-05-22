//unknown се използва временно
//unknown не птремахва type check
function response(arg: unknown): string{
    //В TypeScript, типът any позволява на дадена променлива да приема стойност от всякакъв тип, 
    // като по този начин се изключва проверката на типовете от страна на компилатора.
    if('value' in (arg as any) && typeof (arg as any).value === 'string'){
        return (arg as any);
    }
    return '-';

}
console.log(response({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(response({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(response({ code: 201, text: 'Created', value: 'Object Created' }));