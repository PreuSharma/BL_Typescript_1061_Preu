

//3. Rest Parameters
//Rest parameters allow you to pass multiple arguments as an array using ....
//Use it when you don’t know the exact number of arguments.

function sum8(...arr: number[]):number
{
    return arr.reduce((total,num)=>
        total+num,0)
}
console.log(sum8(1,2,3,4,5,6))
