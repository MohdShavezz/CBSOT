import React from 'react'

function Child({username,setUsername}) {
    return (
        <>
            <div style={{ background: 'lightgreen' }}>

                <h2>Child Component</h2>
                <p> Child: {username}</p>
                <button onClick={()=>setUsername('JOHN')}>change to JOHN</button>
            </div>
        </>
    )
}

export default function Greet(props) {
    console.log(props)
    return (
        <div style={{ background: 'lightgray' }}>
            <h2>Greet</h2>
            <p>Hello, {props?.username}</p>
            <Child username={props?.username} setUsername={props?.setUsername} />
        </div>

    )
}
