import { createContext, useState } from "react";


export const UserContext = createContext('UserContext')


const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('john')

    let obj = {
        // username:username
        username
    }

    return <UserContext.Provider value={obj} >
        {children}
    </UserContext.Provider>
}

export default UserProvider;