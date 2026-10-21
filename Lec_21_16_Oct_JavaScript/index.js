// let a = 1
// let b = 2
// let op = '+'
// if (op == '+') {
//     console.log(a + b) // 3
// } else if (op == '-') {
//     console.log(b - a)
// } else if (op == '*') {
//     console.log(a * b)
// } else {
//     console.log('invalid op')
// }


// let a = 1
// let b = 2
// let op = '*'
// switch (op) {
//     case "+":
//         console.log(a + b)
//         break;
//     case "*":
//         console.log(a * b)
//         break;
//     default:
//         console.log('default excuted.')
//         break;
// }
// console.log('end')


// let a='asdfsd'
// NaN
// isNaN('asdf')
// console.log(typeof a)
// console.log(isNaN(a))
// let resp=isNaN('asdf') //false
// console.log(typeof NaN)


// UNARY OPERATOR 
// let a=5
// c+=2 //c=c+2
// c++ // c=c+1
// console.log(++c) // inc and print
// console.log(c++) // print (inc afterwards)
// console.log(++a + ++a)
// console.log(++a + a++)
// console.log(a++ + --a)

// swap numbers 
// let a=2
// let b=1;

// a=a+b //2+1=3
// b=a-b // 3-1=2
// a=a-b
// console.log(a,b)
// // expected: a=1,b=2

// [a,b]=[b,a]
// console.log(a,b)



// LOGICAL OPERATOR 
// and && ( if any one is false return false)
// or || ( if any one is true return true)
// not ! ( opposite )
// let a = true
// let b = true
// console.log(a && b && true && true)
// console.log(a || b && false)
// console.log((a||b) || (a&&b)) 
// console.log(!((false && true && a && b && true) || ((false && b) || (a || b))))

// precedance order 
// braces 
// * / 
// + -
// let c = 1 + 2 * 3 + (14 - 5 * 2 + 4 / 2) // 13
// let c = 1 + 6 + 6 // 13


// concatination : 2 values jud rahi hongi
// addition : 2 number types add ho rahe honge
// let a=10 
// let b='5' 
// let f='hello'
// let p='there'
// Number() or +
// console.log(typeof ("5"+10))
// console.log(5+Number('2')) 
// console.log(5+ +'2') 

// console.log(""+1+0)
// console.log(true+false)
// console.log(6/"3")
// console.log(2+3+'px')
// console.log('4'-2)
// console.log("-9"-5)
// console.log(null+1)
// console.log(undefined+1)

// Comparison Operator
// Comparison Operator
let a=5 
let b='5'
// console.log(a==b)
// console.log(a===b)
// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)
// console.log(a===b)

// LOOPS 
// for (let i = 10; i >0; i--) {
//   console.log(i);
// }

// let i=0
// while(i!=5){
//   console.log(i) // 0 1 2 3 4
//   i++ // 1 2 3 4 5
// }

// let i=0 
// do{
//  console.log(i)
// }while(i!=0)

// STAR PATTERN PRACTICE



// *****
// *   *
// *   *
// *   *
// *****

// *
// **
// ***
// ****
// *****

//    *
//   **
//  ***
// ****

let n=5
let str=''
for(let i =0 ;i<n;i++){
  // space 
  for(let j=0;j<=n-1-i;j++){
    str+=" " //str=str+"*"
  }
  // star 
  for(let j=0;j<=i;j++){
    str+="*" //str=str+"*"
  }
  str+='\n'
}
console.log(str)



// INPUT 
// alert, prompt, confirm