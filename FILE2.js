//Exercise	1
function someFunction(n) {

    for (var i=0;i<n*1000;i++) {
        for (var j=0;j<n*20;j++) {
            console.log(i+j);
        }
    }
}
//Time complexity:O(n^2)
//Exercise	2
function someFunction(n) {
 
    for (var i=0;i<n;i++) {
        for (var j=0;j<n;j++) {
            for (var k=0;k<n;k++) {
                    for (var l=0;l<10;l++) {
                       console.log(i+j+k+l);
                    }
            }
        }
    }
}
//Time Complexity:O(n^3)
//Exercise	3
function someFunction(n) {

    for (var i=0;i<1000;i++) {
        console.log("hi");
    }
}
//Time complexity:O(1)
//Exercise	4
function someFunction(n) {

    for (var i=0;i<n;i*2) {
        console.log(n);
    }
}
//Time Complexity:O(log2n)
//####Data Types####
var is20 = false; // boolean
console.log(typeof is20) // boolean

var  age = 19;
console.log(typeof age) // number

var  lastName = "Bae";
console.log(typeof lastName) // string

var fruits = ["Apple", "Banana", "Kiwi"];
console.log(typeof fruits) // object

var me = {firstName:"Sammie", lastName:"Bae"};
console.log(typeof me) // object
var nullVar = null;
console.log(typeof nullVar) // object

var function1 = function(){
    console.log(1);
}
console.log(typeof function1) // function

var blank;
/*Given	three	numbers	x,	y,	and	p,	compute	(xˆy)	%	p.	(This	is	modular	exponentiation.)
Here,	x	is	the	base,	y	is	exponent,	and	p	is	the	modulus.
Modular	exponentiation	is	a	type	of	exponentiation	performed	over	a	modulus,
which	is	useful	in	computer	science	and	used	in	the	field	of	public-key	encryption
algorithms.*/
function modularExponentiation (base,exponent,modular){
    return Math.pow(base,exponent)%modular
}
//####String Access####
console.log('dog'.charAt(1))//returns 'o'
'youtube'.substring(3,7)//returns 'tube'

'Red Dragon'.indexOf('Red');    // returns 0
'Red Dragon'.indexOf('RedScale'); // returns -1  'Red Dragon'.indexOf('Dragon', 0); // returns 4
'Red Dragon'.indexOf('Dragon', 4); // returns 4
'Red Dragon'.indexOf('', 9);    // returns 9
//####String Decomposition####
var test1='mark,henry,roger'
console.log(test1.split(","))
//[ 'mark', 'henry', 'roger' ]
var test2='spinach,ladyfinger,potatoe,tomatoe'
console.log(test2.split(""))
/*[
  's', 'p', 'i', 'n', 'a', 'c', 'h',
  ',', 'l', 'a', 'd', 'y', 'f', 'i',
  'n', 'g', 'e', 'r', ',', 'p', 'o',
  't', 'a', 't', 'o', 'e', ',', 't',
  'o', 'm', 'a', 't', 'o', 'e'
]*/
//####Helper Functions####
var array1=[1,2,3,4]
console.log(array1.slice(2,3))
//[3]
//copying array to another without changing original array
var array2=[9,7]
var array3=array1.from(array2)

console.log(array2)//[9,7]
console.log(array3)//[9,7]

array3[0]=10

console.log(array2)//[9,7]
console.log(array3)//[10,7]

//array.splice(begin,size,element1,element2…)
//array.concat()
//array.length
//	