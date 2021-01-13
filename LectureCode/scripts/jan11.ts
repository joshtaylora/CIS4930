let helloWorld: string = 'Hello, World';
console.log(helloWorld);

let hex: number;
hex = 0x4afc1d;

let big: bigint;
// big =578983794089234;

let list: number[] = [1, 2, 3, 4];

function addListVals(list: number[]): number
{
    let sumOfListVals: number;
    sumOfListVals = 0;
    list.forEach(element => {
        sumOfListVals += element;
    });
    return sumOfListVals;
}

/**
 * JS does not support enums
 * Babel, the TS interpreter, converts the enum to corresponding valid JS code
 */

enum Color
{
    Red,
    Green,
    Blue
}

let joshColor = Color.Red;
let katColor = Color.Blue;

class Student 
{
    firstName: string = "";
    constructor(firstName: string)
    {
        this.firstName = firstName;
    }
}