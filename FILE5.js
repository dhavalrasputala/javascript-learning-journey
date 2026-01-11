
//####CallBack Function####
console.log('A')
let A=10
let C=10
setTimeout(()=>{
    B=A+C
    console.log(B)
},0);
console.log('C')

//####Promises####
let fiffteen  = Promise.resolve(10)
fiffteen.then(value =>console.log(`got the ${value}`))

function getData(back) {
  setTimeout(() => {
    back(10);
  },0);
}
//Promise Syntax
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

getData(value => {
  console.log(value);
});
//####Chain of Promises####
new Promise((_, reject) => reject(new Error("continew the chain")))
  .then(value => console.log("Handler 1"))
  .catch(reason => {
    console.log("Caught failure " + reason);
    return "chain continews";
})
.then(value => console.log("Handler 2", value));
//callback example
function add(a, b, reply) {
  reply(a + b);
}

add(2, 3, result => {
  console.log(result);
});
