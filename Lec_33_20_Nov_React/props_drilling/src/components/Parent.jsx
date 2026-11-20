import React from 'react'
import { Child } from './Child'

const Parent = () => {

  return (
    <div style={{background:'lightgreen'}}>
        <h2>Parent</h2>
        <Child/>
    </div>
  )
}

export default Parent