//####Last Javascript Lesson####
//ES6 Features
//Let Keyword
var x = 10
{
    let x = 2
    //here x is 2
}
//here x is 10
//Const keyword
//the const keyword allows you to declate a constant
var Y = 19
{
    const Y = 20
    //here Y is 20
}
//here Y is 19

//Arrow Function
let myfunction = function(a,b){return a*b}
//With Arrow
let myfunction2 = (a,b) => a*b
//####Object Destructuring####
let person ={
    firstname:"john",
    lastname:"Doe",
    age:23,
    car:"ford"
}
let {firstname,car}=person
console.log(firstname,car)
//john ford
//####Spread Operator####
//...operator spreads an array or iterable into individual elements
const numbers = [2,92,54,44,56]
let minVal = Math.min(...numbers)
console.log(minVal)
//2
//...operator can be used to join the Arrays
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)
//####Maps####
//A Map is an object that stores key-value pairs
const fruits = new Map([
    ["apples",400],
    ["banana",200]
]);
let numb = fruits.get("apples")
console.log(numb)
//####Sets####
//Set is an Object that stores Unique values of any type
const numbers2 = new Set();

numbers2.add("a")
numbers2.add(1)
numbers2.add(true)
numbers2.add(3.444444444444444444)
console.log(numbers2)
//####Classes####
class example {
    //constructor keyword is must
    constructor(name,year){
        this.name = name
        this.year = year
    }
}
const new1 = new example("Ford",1980)
const new2 = new example("Honda",2011)

console.log(new1.name,new2.year)
//####Promises####
const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
//Default Values in Function
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
//####Rest Parameter####
//the ...args parameter allows the function to treat an indefinite number of arguments as an array
function multipy(...args){
    let mul = 1
    for (let arg of args) mul *= arg;
    return mul
}
let z = multipy(4,3)
console.log(z)
//12
let z1 = multipy(4,3,5,6,7,8,9,10)
console.log(z1)
//1814400
//####Array Entries####
const nails = ["nail1","nail2","nail3"]
const n = nails.entries()
for(let x of n){
console.log(x)
}
/*
[ 0, 'nail1' ]
[ 1, 'nail2' ]
[ 2, 'nail3' ]*/
//####Array From method####
console.log(Array.from('dhaval'))
//[d,h,a,v,a,l]