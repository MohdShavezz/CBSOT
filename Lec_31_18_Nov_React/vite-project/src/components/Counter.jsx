import { useState } from 'react'
import '../styles/Counter.css'

export const Counter = () => {

    console.log('Counter Render...')
    // let count=1
    // let a=10
    const [count,setCount]=useState(0)

    function handleCommon(val){
        if(val=="INC"){
            setCount(val=>val+1)
        }else if(val=='DEC'){
            setCount(val=>val-1)
        }else{
            setCount(0)
        }
    }

    // function handleInc(){
    //     setCount(val=> val+1)
    //     // setCount(count+1)
    // }
    // function handleReset(){
    //     setCount(0)
    // }
    // function handleDec(){
    //     setCount(count-1)
    // }

    return (
        <>
            <div id='parent'>
                <h2 className='head'>Counter App</h2>
                <p className='point'>Count: {count}</p>
                <button onClick={()=>handleCommon('INC')}>INC</button>
                <button onClick={()=>handleCommon("RESET")}>RESET</button>
                <button onClick={()=>handleCommon("DEC")}>DEC</button>
            </div>

        </>
    )
}
