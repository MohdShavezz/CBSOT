import React from 'react'

export const ButtonComp = ({btnContent,clr}) => {
 
  // let str='home'
  console.log(btnContent,clr)
  
  return (
    <div>
        <button style={{background:clr}}>
           {btnContent}
        </button>
    </div>
  )
}
