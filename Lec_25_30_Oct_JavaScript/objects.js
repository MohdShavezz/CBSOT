// let user={
//   name:'john',
//   age:22,
//   phone:99898,
//   address:{
//     street:'street 1 knowledge park',
//     pincode: 221100
//   },
//   isActive:true
// }
// console.log(user.name)
// console.log(user.address)
// console.log(user.address.street)

// let user={
//   name:'john',
//   age:22
// }
//INSERT in Object
// let obj={...user,phone:'997879'}
// Object.assign(user,{phone:9988})

//UPDATE Object
// user['name']='tom'
// user.name='tom'
// console.log(user)

//delete from object
// delete user.age 
// console.log(user)

// let user={
//   name:'john',
//   age:22,
//   my_home_street_address:'alksdfjalksd fasdkfj'
// }
// // let name=user.name
// // let age=user.age
// // const {name,...baki}=user 
// // console.log(name)
// // console.log(baki)

// const {my_home_street_address:address}  = user
// console.log(address)

//Object merge 

// let obj={
//   name:'tom',
//   age:91,
//   address:{
//     pin:99898
//   }
// }
// // let obj2=obj 
// let obj2=obj
// obj2.address.pin=23 
// console.log(obj)
// console.log(obj2) //problem shallow copy

// let obj={
//   name:'tom',
//   age:91,
//   address:{
//     pin:99898
//   }
// }

//stringify and parse 
// console.log(obj)// type object
// let strgfy=JSON.stringify(obj)
// // console.log(typeof strgfy) // type string 
// let prse=JSON.parse(strgfy)
// console.log(prse)

// let obj2=obj // shallow copy
// let obj2=JSON.parse(JSON.stringify(obj)) // deep copy
// obj2.address.pin= 12
// console.log(obj)
// console.log(obj2)


// let arr=[1,2,2,3,4,4,5]
// // Q1 frequency of arr elements 
// // {
// //   1:1,
// //   2:2,
// //   3:1,
// //   4:2,
// //   5:1
// // }
// let obj={}
// for(let i of arr){
//   // console.log(i)
//    if(obj[i]){
//     obj[i]+=1
//    }else{
//     obj[i]=1
//    }
// }
// console.log(obj)


// Q2 map vs forEach 
// map return new array 
// forEach modify same arr, not return new one
let arr=[1,2,3]
let sqr=arr.map(e=>e*e)
console.log(sqr)
arr.forEach(ele=> ele*ele)


