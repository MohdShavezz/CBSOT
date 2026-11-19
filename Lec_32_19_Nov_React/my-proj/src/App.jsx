import React, { useState } from 'react'
import Mycomp from './Mycomp'
import Greet from './Greet'

const App = () => {

  const [flag, setFlag] = useState(true)
  const [username, setUsername] = useState('peter')



  // console.log('App mounting...')

  function handleRemove() {
    // setFlag(false)
    setFlag(p => !p)
  }

  return (
    <>
   
      <div style={{background:'yellow'}}>
        <div>
          {
            flag && <Mycomp />
          }
          <button onClick={handleRemove}>toggle</button>
        </div>
         <h2>App username: {username}</h2>
        <br />
        <br />
        <Greet username={username} setUsername={setUsername} />
      </div>
    </>
  )
}

export default App