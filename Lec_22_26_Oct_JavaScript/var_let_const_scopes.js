//var let const 
// strict order:  const > let > var

// let b  // declaration
// b=4  // assign 
// let p='hi' // p is initialised with 'hi'

// var a=10 
// console.log(a)

// console.log(a)
// var a=10 
// console.log(a)

// var a=5 
// var a=10 
// console.log(a)

// let a=5 
// let a=10 
// console.log(a) //Identifier 'a' has already been declared

// let a=5 
// a=10 
// console.log(a)


//const does'nt reinitialized
// const a
// const a=4 //Identifier 'a' has already been declared
// a=5 // error


// HOISTING 

// const a=5
// // a=2 //error
// console.log(a)

// console.log(a)
// var a=5

// console.log(a)
// let a=10 // Cannot access 'a' before initialization

// console.log(a)
// a=10 
// console.log(a)


// prefer  const > let > var


// SCOPE of variables 
// var: functional scope 
// let const : block scope
// const a = 6
// console.log(a)
// if (true) {
//   const a = 5
//   console.log(a)
// }
// console.log(a)


// global [ a=6 ]
// local [ a=5]

// const a=10
// function fn() {
//   const a = 6
//   console.log(a)
//   if (true) {
//     const a = 5
//     console.log(a)
//   }
//   console.log(a)
// }
// fn()
// console.log(a)


// var a=10
// console.log(a)
// function fn() {
//   var a = 5
//   if(true){
//     var a=6
//   }
//   console.log(a)
// }
// fn()
// console.log(a)

// let a = 2
// function fn() {
//   let a = 1
//   console.log(a)
//   if (true) {
//     let a = 2
//     console.log(a)
//     if (true) {
//       a = 2
//       console.log(a, '104')
//     }
//     console.log(a)
//   }
//   console.log(a)
// }
// fn()
// console.log(a)
// 1 2 2 2 1 2 









