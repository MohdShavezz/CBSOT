let arr = [1, 2, 3, 4, 5, 6] 
//Q1 find the sum of squares of even numbers of arr 
// let evens=arr.filter((n,ind)=>{
//   if(n%2==0){
//     return n
//   }
// }) 
// let sqrs=evens.map(ele=>ele*ele)
// let s=sqrs.reduce((acc,ele)=>acc+ele,0)
// console.log(s)

// console.log(arr.reduce((acc,ele)=>{
//   if(ele%2==0){
//      acc+=ele*ele
//   }
//   return acc 
// },0))

// let arr = [1, 2, 2, 3, 4, 5, 5] 
//Q2 find unique numbers of arr 

// let arr = [1, 2, 2, 3, 4, 5, 5] 
//Q2 find unique numbers of arr 
// let unique=[1, 2, ] 
// for(let ele of arr){ // 1 2 2 3
//   if(!unique.includes(ele)){  //true  
//     unique.push(ele)
//   }
// }
// console.log(unique)


// let arr1=[1,2]
// let arr2=[3,4]
// // Q3 merge array elements
// console.log([...arr1,...arr2]) // [1,2,3,4]

// console.log(Math.floor(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(Math.random()*10))
// let arr=[1,2,3,4,5]
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))
// console.log(Math.sqrt(16))
// console.log(Math.pow(2,4))

let arr=[1,2,2,4,4]
let s=new Set(arr)
let res=Array.from(s) // set
console.log(res) // array