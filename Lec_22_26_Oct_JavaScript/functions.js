// FUNCTIONS
// printHi()
// function printHi(){ // fn declaration
//   console.log('hi')
// } 
// printHi() // fn call

// function addNumbers(n1,n2){ // params
//   // console.log(n1+n2)
//   let sum=n1+n2
//   console.log(`sum of ${n1} and ${n2} is ${sum}`)
//   return sum
// }

// let returnVal=addNumbers(2,3) //  2,3 args    fn call
// console.log(returnVal)

//DEFAULT Parameters
// function addNumbers(n1=0,n2=0){
//   let sum=n1+n2
//   console.log(`sum of ${n1} and ${n2} is ${sum}`)
// }
// addNumbers(1,2) 

// FUCNTION EXPRESSION 
// let a=function(){ //anonyms fn
//   console.log('hi')
// }
// a()

// function sum(a,b){
//   return a+b
// }
// sum(1,2)

// arrow function
// const sum=(a,b)=>{
//   return a+b
// }
// const sum=(a,b)=> a+b
// console.log(sum(1,2))


//CALLBACK function 
// function fn(){
//   console.log('fn')
// }
// function inner(a){  
//   console.log('inner',a)
//   fn()
// }

// function outer(){
//   let a=5
//   console.log('outer')
//   inner(a)
// }
// outer()


// CALLBACK  : passing fn and an argument
// fn1(fn2)

// function fn2(){
//   console.log('fn2..')
// }
// function fn1(cb){
//   console.log('fn1..')
//   cb()
// }
// fn1(fn2)

// fn1(()=>{
//   console.log('hi callback')
// })
// order > dispatch > delivery : execution order matters


// CURRYING : nested fn call
// function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// // let r1=sum(1)
// // let r2=r2(2)
// // let r3=r2(3)
// let r=sum(1)(2)(3)
// console.log(r)

// function fnn() {
//   let a = 5
//   console.log(a)
//   a++
// }
// fnn()
// fnn()


// CLOSURE : parent child 

function fn() { //outer
  let a = 5  // lexical scope
  return function () { //inner
    console.log(a)
    a++
  }
}
let a = fn()
a()
a()
a()
a()

//function execution CALLSTACK 
var x=1;
a()
b()
console.log(x)

function a(){
  var x=10;
  console.log(x)
}
function b(){
  var x=10;
  console.log(x)
}
