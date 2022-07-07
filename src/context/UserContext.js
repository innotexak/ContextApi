import React, { useState, createContext } from 'react'

const UserContext = createContext()

// UserContext
// Provider 
// useContext
// 

const v = 5
const d = []


v ? v===1? d.push(v): d.push(0):v.push(null)

console.log(d);
const getLocalUser = () => {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { token: null };
};

function UserProvider({ children }) {
    const [user, setUser] = useState(getLocalUser())


    const LogOut = () => {
        let user = { token: null }
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user));
    }

    const globalVariable = "i am global, and its working "

    return (
        <UserContext.Provider value={{ user, setUser, globalVariable }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }

