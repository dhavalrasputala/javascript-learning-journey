//###Abstraction####
function GreaterThan(n){
return m => m>n
}
let GreaterThan10 = GreaterThan(10)
console.log(GreaterThan10(11))
//true
//####Closure####
function wrapValue(n){
    let local = n
    return () => local
}
let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)
console.log(wrap1)
//1
console.log(wrap2)
//2
function multiplier(factor) {
    return number => number*factor
}
let twice  = multiplier(2)
console.log(twice(5))
//####Higher Order Function####
function unless(test, then) {
  if (!test) then()
}

function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i)
  }
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even")
  })
});
//ForEach method
[1,2,3,4,5].forEach(element => console.log(element))
//Reduce Method
let arrays = [[1,2], [3,4], [5],[6,7,8],[9,10,11,12]]

let flat = arrays.reduce((acc, curr) => {
  return acc.concat(curr)
}, [])

console.log(flat) 
// [1,2,3,4,5,6,7,8,9,10,11,12]
//####Objects and Methods####
//when function is stored in object it is called method
let rabbit = {}
rabbit.speak= (line) =>{
    console.log(`the Rabbit says '${line}'`)//`....`allows embedding variable 
}
rabbit.speak('i am alive');

let ages = {
Boris: 39,
Liang: 22,
Júlia: 62
};
console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true