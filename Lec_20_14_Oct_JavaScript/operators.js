// OPERATORS
// +
// -
// *
// /
// %
// = assign
// ==,=== comparision

// let a=7.4
// let b=10
// console.log("Addition:",a+b)
// console.log("Addition:",a-b)
// console.log("Divide:",b/a)
// console.log("Mod",b%a)

// // let val=b/a  // 3.33333333
// console.log(val.toFixed(2))  // 3.33
// console.log(a-b)

// use two values and one operator
// and create a calulator application
// addition substration devision multiply
// let a=10
// let b=5 
// let oper='/'
// if(oper=='+'){
//     console.log(a+b)
// }else if(oper=='-'){
//     console.log(a-b)

// }else if(oper=='*'){
//     console.log(a*b)
// }else if(oper=='/'){
//     console.log(a/b)
// }else{
//     console.log('invalid operator')
// }

// = 
// == 
// ===
// let a=10 
// let b='10' 
// console.log(a==b)
// console.log(a===b)

// truthy values: true 1 'ast' "" [] {}
// falsy values: false 0 null undefined
// let arr=[1,2]
// if(arr){
//     console.log('hi..')
// }

let a=6;
let b=10;
if(a>b){
    console.log('a is big')
}else{
    console.log('b is big')
}

//ternary operator
// condion ? true : false

a>b ? console.log('a is big') : console.log('b is big')
a=6;
b=10;
if(a>b){
    console.log('a is big')
}else{
    if(false){
        console.log('2')
    }else{
        console.log('3')        
    }
}

a=6;
b=10;
a>b ? console.log('a is big') : false ? console.log('2'):console.log('3')