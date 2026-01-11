//####All the Exercises given after each Chapter####
//1st print the triangle
/*#
##
###
####
#####
######
#######*/
//code:
for (let i = 0;i<=7;i++){
    line = ''
    for(let j=0;j<=i+1;j++){
        line +='#'
    }
    console.log(line)
}

/*Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).*/
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
/*Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #*/
let string = '#'
for(let i = 0;i<8;i++){
    line=''
    for(let j = 0;j<8;j++){
        line+=(i+j)%2===0?'#':' '
    }
    line +='\n'
    console.log(line)
}
/*We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N- 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.*/
function EvenOdd(num){
    if (num == 0){
        return true
    }else if (num==1){
        return false
    }else{
        return EvenOdd(num-2)
    }
}
console.log(EvenOdd(50))
/*You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example,
"b"). The first character has position 0, which causes the last one to be found at
position string.length- 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.*/
let examplestring="BoBBYYYYYYYYY"
let lttr='Y'
function countBs(examplestring){
    let count = 0
    for (let i = 0;i<examplestring.length;i++){
        if(examplestring[i]=='B'){
            count+=1
        }
    }
    return count
}
console.log(`the number of "B's"in ${examplestring}is:`,countBs(examplestring))
//the number of "B's"in BoBBYYYYYYYYYis: 3
function countChar(examplestring,lttr){
    let count2=0
    for (let i = 0 ;i<examplestring.length;i++){
        if(examplestring[i]==lttr){
            count2+=1
        }
    }
    return count2
}
console.log(`the Number of ${lttr} in ${examplestring}is:`,countChar(examplestring,lttr))
//the Number of Y in BoBBYYYYYYYYYis: 9