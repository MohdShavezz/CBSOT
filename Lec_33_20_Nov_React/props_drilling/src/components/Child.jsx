import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export const Child = () => {
  const data=  useContext(UserContext)
  console.log(data)
  return (

    <div style={{background:'lightgray'}}>
        <h2>Child {data?.username}</h2>
    </div>
  )
}
