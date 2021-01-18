// boolean type
let isDone: boolean = false;
/**
 * Numbers
 * All numbers in TS are either floating points or BigIntegers
 * floating point numbers have the type number
 * BigIntegers get the type bigint
 * TS supports hex, decimal, binary, and octal literals
 */
let decimal: number = 6; 		// decimal floating point number
let hex: number = 0xf00d; 		// hex floating point number
let binary: number = 0b1010; 	// binary floating point number
// 		issue: bigints aren't available when targetting lower than es2020	let big: bigint = 100n;
/**
 * Strings
 * the string type is used for textual datatypes
 * you can use single or double quotes to enclose string data
 */
let color: string = 'blue';
// Template strings
let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = 'Hello, my name is ${fullName}. I\'ll be ${age + 1} years old next month.';
/**
 * Array
 * 
 */
// using the type of the elements followed by [] 
let list1: number[] = [1, 2, 3];
// generic type
let list2: Array<number> = [1, 2, 3];
/**
 * Tuple
 * 
 */
// declare a typle type
let x: [string, number];
// initialize values
x = ['hello', 10];
// access element at the first index
console.log(x[0].substring(0));
/**
 * Enum
 * by defualt, Enum's start numbering their members at 0
 * you can override this by specifying the value of the first element manually
 */
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green;

enum Names {
	Josh = 1,
	Kat,
	Rocky,
}
let n: Names = Names.Kat;
// you can look up the value of an indexed Enum element 
let colorName: string = Color[2];
// Display's 'Blue'
console.log(colorName);
/**
 * Unknown
 * used to descrube the type of variables that we do not know when we are writing an application
 * - may come from dynamic content from the user
 * - or maybe we just want to accept all values in our API
 * use the unknown type to tell the compiler and future devs that this variable could be anything
 */
let notSure: unknown = 4;
notSure = "could be a string instead";
notSure = false; // now it's a boolean
/* if you have a variable of unknown type, you can narrow it to something more specific by doing typeof checks,
 comparison checks, or some advanced tyope guard
*/
declare const maybe: unknown;
/*
This assignment is not allowed because maybe could be some other type that isnt a number
const aNumber: number = maybe;
*/
if (typeof maybe == 'boolean') {
	// now we have checked that maybe is of type boolean
	const aBoolean: boolean = maybe;
	console.log("maybe is a boolean")
}
if (typeof maybe == 'string') {
	// TypeScript knows now that maybe is a string
	const aString: string = maybe;
	console.log(aString);
}
