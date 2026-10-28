// Q1.
// input : hello 
// output : Hello
// let str='hello'
// console.log(str[0].toUpperCase()+str.slice(1,))

// Q2 check if the word is palindrome
// input: madam,  output: true
// input: asdf, outptu: false
// let str='asdf'
// function checkPalindrome(str){
//   // let rev=str.split('').reverse().join('')
//   // return rev===str

//   str.split('').reverse().join('')===str?console.log(true): console.log(false)
  
// }
// checkPalindrome(str)

// Q3
let str=' asdf ' // output : "a_s_d_f"
let trm=str.trim() 
let splt=trm.split('')
let out=splt.join('_')
console.log(out)
console.log(str.trim().split('').join('_'))


