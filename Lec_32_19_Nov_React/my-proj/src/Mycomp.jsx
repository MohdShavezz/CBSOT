import React, { useEffect, useState } from 'react'

const Mycomp = () => {

    const [count,setCount]=useState(0)
    
    // console.log('Mycomp mounting..')

    useEffect(()=>{
        // console.log('Updating Mycomp mounting..')
        // // API fetch 

        // return ()=> {
        //     console.log('unmounting MyComp')
        // }
    },[count])


    return (
        <div style={{background:'pink',width:'10rem',textAlign:'center',margin:'auto'}}>
            <h2>Mycomp</h2>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(v=>v+1)}>INC</button>

        </div>
    )
}

export default Mycomp