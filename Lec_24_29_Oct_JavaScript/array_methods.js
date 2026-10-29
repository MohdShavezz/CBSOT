//HIGHER ORDER FUNNCTION
function fn() {
  console.log('hi')
  return function () {
    console.log('hello')
  }
}
// let a=fn()
// a()
// fn()()

// let arr=[1,2,3,4]
// map filter reduce 
//Q1 squares of array elements 
// let res=arr.map((ele,ind)=>{
//   // console.log(ele,ind)
//   // console.log(ele*ele)
//   return ele*ele
// })
// let res=arr.map(ele=> ele*ele)
// console.log(res) // return new array
// console.log(arr)

// Q2 squares of array even elements 
// console.log(arr.map((ele,ind)=>{
//   // if(ele%2==0){
//   //   //even
//   //   return ele*ele
//   // }else{
//   //   //odd
//   //   return ele
//   // }
//   return ele%2==0?ele*ele:ele
// }))
//OR
// console.log(arr.map(ele=> ele%2==0?ele*ele:ele))

// FILTER 
// let arr=[1,2,3,4,5,6,7,8]
// //filter : conditionaly filters array elements 
// // Q1 create new array odd_numbers that will hold odd array elements of arr
// // output: [1,3,5,7]
// let odd_numbers=arr.filter((ele)=>ele%2!=0)
// console.log(odd_numbers)


//REDUCE
// let arr=[1,2,3]
// let sum=arr.reduce((acc,ele)=>{
//    return acc+ele //0+1+2+3
// },0)
// console.log(sum)

// let arr=[1,2,3,4,5,6]
// //FIND in not found return undefined 
// console.log(arr.find((ele)=> ele==7))


// let users=[
//   {name:"rohit",age:22,num:9989},
//   {name:"bheem",age:12,num:9995},
//   {name:"ram",age:24,num:189},
//   {name:"john",age:4,num:244},
//   {name:"rohit",age:21,num:1111},
// ]

// // Q find rohit's information
// let rt=users.find((usr)=>{
//    return usr.name==='rohit'
// })
// console.log(rt)

// FINDINDEX if not found return -1
// console.log(arr.findIndex((ele)=> ele==4))

//SOME vs EVERY 
// let arr = [1, 2, 3, 4, 5, 6]
// 1. kya saare arr elements 3 se bare hai
// console.log(arr.every((ele)=>{
//   return ele>3
// }))
// // 2. kya kuch arr elements 3 se chote hai
// console.log(arr.some((ele)=>{
//   return ele<3
// }))

// console.log(arr.includes(3)) // check if present in arr return boolean 


//flat 
let arr = [1, 2, [3, [4, 5], 6]]
// console.log(arr[2][0]) //3
// console.log(arr[2][1][1]) //5
// console.log(arr.flat(1))
// console.log(arr.flat(Infinity))
// outupt: [1,2,3,4,5,6]


