//####Functional Array Methods#####
// map function applies passed function transformations to every element in array
console.log([1,2,3,4,5,6,7].map(function (value) {
    return value*10
}))

var users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const names = users.map(user => user.name);
// ["Alice", "Bob"]

//filter function returns only those elements of the array that meets a passed condition parameter.

number=[100,200,300,400,500]

console.log(number.filter(value => value>100))
//[200,300,400,500]

const names1=['bob','jerry','tom']

console.log(names1.filter(n => n[0]==='b'))
//'bob'

var users1 = [
    {name:'Ali',active:true},
    {name:'amy',active:false}
];

const activeUsers = users1.filter(user1=>user1.active)
console.log(activeUsers)
//[ { name: 'Ali', active: true } ]
