import React, { useContext, useState } from 'react'
import Parent from './Parent'
import { UserContext } from '../UserContext'

const Grandparent = () => {
    const data=useContext(UserContext)
    console.log(data)
    
    return (
        <div style={{ background: 'yellow' }}>
            <h2>Grandparent</h2>
            <Parent />
        </div>

    )
}

export default Grandparent