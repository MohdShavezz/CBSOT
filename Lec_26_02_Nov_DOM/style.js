// alert('hi')

// let btn=document.querySelector('button')
// console.log(btn)
// btn.addEventListener('click',()=>{
//     console.log('button click..')
//     document.body.style.backgroundColor='yellow'
// })


// SELECTORS
// let h2=document.getElementById('head')
// console.log(h2)
// let spans=document.getElementsByClassName('spn')
// console.log(spans)
// let a=document.querySelector('h2')
// let b=document.querySelector('#head')
// let c=document.querySelector('.head-cls')
// console.log(a)
// console.log(b )
// console.log(c )

//EVENTs
// window.addEventListener('load',()=>{
//     alert('page loaded...')
// })
let p=document.querySelector('p')
// console.log(p)

p.addEventListener('mouseenter',()=>{
    // alert('hi')
    p.style.color='red'
})
p.addEventListener('mouseleave',()=>{
    // alert('hi')
    p.style.color='pink'
})

let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    // console.log('btn clicked..')
    btn.innerText='content changes'

})

document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                console.log('enter pressed down')
            }
        });
document.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                console.log('enter pressed up')
            }
        });


//log 2nd span content 
let spns=document.querySelectorAll('span')
console.log(spns[1].innerText) 

//clicking on section-btn will add new div insdie section
let section_btn=document.getElementById('section-btn')
let section=document.getElementById('section')
section_btn.addEventListener('click',()=>{
    //create new html element 
    let div=document.createElement('div')
    // div.innerText='three'
    div.innerHTML='<h1>hello</h1>'
    div.style.color='red'
    section.appendChild(div)
})

let h6=document.createElement('h6')
h6.innerText='hello'
// section.insertAdjacentElement('beforebegin',h6)
section.insertAdjacentElement('afterbegin',h6)

