// boolean type
var isDone = false;
/**
 * Numbers
 * All numbers in TS are either floating points or BigIntegers
 * floating point numbers have the type number
 * BigIntegers get the type bigint
 * TS supports hex, decimal, binary, and octal literals
 */
var decimal = 6; // decimal floating point number
var hex = 0xf00d; // hex floating point number
var binary = 10; // binary floating point number
// 		issue: bigints aren't available when targetting lower than es2020	let big: bigint = 100n;
/**
 * Strings
 * the string type is used for textual datatypes
 * you can use single or double quotes to enclose string data
 */
var color = 'blue';
// Template strings
var fullName = 'Bob Bobbington';
var age = 37;
var sentence = 'Hello, my name is ${fullName}. I\'ll be ${age + 1} years old next month.';
/**
 * Array
 *
 */
// using the type of the elements followed by [] 
var list1 = [1, 2, 3];
// generic type
var list2 = [1, 2, 3];
/**
 * Tuple
 *
 */
// declare a typle type
var x;
// initialize values
x = ['hello', 10];
// access element at the first index
console.log(x[0].substring(0));
/**
 * Enum
 * by defualt, Enum's start numbering their members at 0
 * you can override this by specifying the value of the first element manually
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Names;
(function (Names) {
    Names[Names["Josh"] = 1] = "Josh";
    Names[Names["Kat"] = 2] = "Kat";
    Names[Names["Rocky"] = 3] = "Rocky";
})(Names || (Names = {}));
var n = Names.Kat;
// you can look up the value of an indexed Enum element 
var colorName = Color[2];
// Display's 'Blue'
console.log(colorName);
/**
 * Unknown
 * used to descrube the type of variables that we do not know when we are writing an application
 * - may come from dynamic content from the user
 * - or maybe we just want to accept all values in our API
 * use the unknown type to tell the compiler and future devs that this variable could be anything
 */
var notSure = 4;
notSure = "could be a string instead";
notSure = false; // now it's a boolean
/*
This assignment is not allowed because maybe could be some other type that isnt a number
const aNumber: number = maybe;
*/
if (typeof maybe == 'boolean') {
    // now we have checked that maybe is of type boolean
    var aBoolean = maybe;
    console.log("maybe is a boolean");
}
if (typeof maybe == 'string') {
    // TypeScript knows now that maybe is a string
    var aString = maybe;
    console.log(aString);
}
