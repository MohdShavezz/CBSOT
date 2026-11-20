import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export const Sibling = () => {
    //need grandparent data 
    const data=useContext(UserContext)
    console.log(data)
  return (
    <div>
        <h2>Sibling {data?.retired}</h2>
    </div>
  )
}
