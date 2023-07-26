// Challenge 1
//  Q-1
let myBoolean = true;


//  Q-2
let myString = 'hello world';


//  Q-3
let firstNumber = 20;


//  Q-4
let secondNumber = 40;


//  Q-5
secondNumber = 80
80

//  Q-6
let myArray = [myBoolean, myString]


//  Q-7
let myObject = {
    firstProperty: myArray,
    sumProperty: (firstNumber + secondNumber),
}


//  Q-8
console.log(myObject)
// { firstProperty: Array(2), sumProperty: 100 }


//  Q-9
console.log(myObject.sumProperty)
100



//  Q-10
console.log(myObject.firstProperty[0])
true


//---------------------------------------------------------


// Challenge 2

// const some number = 20;

// someNumber =50


// 1. some an number are writtn separately, making it no variable
// 2. someNumber updates value to 50 although it is not defined

//---------------------------------------------------------


// Challenge 3

// resultVariable answer is 2040
// datatype becomes String

// ---------------------------------------------------------

// Challenge 4

const obj = {
    p1: 'i am p1',
    p2: 'i am p2',
    p3: [20, 30, 40]
}

console.log(obj.p3[2])
 40

//  Challenge 5

const myArray1 = [20,30,40]
console.log(myArray1[3])

// this wrong bcz index starts from 0 amd ends at 2 for a 3 sized array 
// ths it can be written as :
console.log(myArray1[2])