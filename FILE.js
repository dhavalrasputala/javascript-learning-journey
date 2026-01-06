//####Unary operations####
console.log(typeof 6.4)
console.log(typeof "D")
console.log(typeof true)
console.log(typeof 11111111)
console.log(typeof 8)
/*output
1.number
2.string
3.boolean
4.number
5.number*/
//####Logical Operators####
console.log(true && false)
//output-false
console.log(true && true)
//true
console.log(false || true)
//true
console.log(false||false)
//false
//####Automatic Type Conversion
console.log(8*null)
//0
console.log("5"-3)
//2
console.log("5" + 2)
//52
console.log("five"-2)
//NaN
//####Short Circuiting of Logical Operators####
//convert the value on their left side to boolean type in order to decide what to do either returns original left hand value or right hand value
console.log(null||"user")
//user
console.log("ages"||"users")
//Ages
//Variables can also be called Bindings
//####Loops####
let number = 0
while (number<=12) {
    console.log(number)
    number = number + 2
}
//0 2 ....
for (let number = 0;number <=12;number = number + 2){
    console.log(number)
}
//0
//2
//..
//####END of Chapter Exercise####
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Buzz");
  } else if (i % 5 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
//####Functions####
const square = function(x){
    return x * x
}
console.log(square(122))
const power = function(base,exponent){
    let result = 1;
    for(let count = 0 ; count<exponent;count++){
        result *=base
    }
    return result
}
console.log(power(3,15))
//14348907
console.log("the Future says that:",future());

function future(){
    return "i will learn mern stack one day"
}
//the future says that i will learn mern stack one day
//funtions execute even though defined below
//####Arrow Functions####
hello = (/*requires value if not keep it empty*/) => {
    console.log("HELLO WORLD!");
};
hello()
const square1 = (x) => { return x * x; };
square1(4)
//16