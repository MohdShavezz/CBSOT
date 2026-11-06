// console.log(1)
// setTimeout(()=>{
//   console.log(3)
// },1000)
// setTimeout(()=>{
//   console.log(0)
// },500)
// console.log(2)

// assync 
// fetch api (GET)
// {
//   pending, resolve, rejected // (promise states)
// }

let p = new Promise((res, rej) => {
  if (0) {
    //resolve
    res('sucessfully resoled..')
  } else {
    //rejected
    rej('data failed to load')
  }
})

//Handle Promie Two Methods
// 1. then-catch 
// p.then((data)=>{
//   // promise resolve
//   console.log('then:',data)
// }).catch(err=>console.log('catch:',err)) // promise reject
// .finally(()=>{
//   console.log('finally runs..')
// })

// 2. async await
async function fn() {
  try {
    let data = await p
    console.log(data)
  } catch(e) {
    console.log(e)
  }
}
fn()
