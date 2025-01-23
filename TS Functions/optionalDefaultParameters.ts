
// Optional and Default Parameters :

//--Optional Parameters
//Use ? after the parameter name to make it optional.
//If the optional parameter is not passed, it is treated as undefined.
function greet9(name?:string):string{
    return `Hello, ${name ?? "Guest"}!`
}
greet9();



//--Default Parameters
//Assign a default value to a parameter. If no value is provided during the call, the default is used.
function abcy7(a:number,b:number=2):number
{
    return a*b;
}
console.log(abcy7(10));


