
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
