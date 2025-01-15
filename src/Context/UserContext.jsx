import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({
            name: "Diego Guevara",
            registered: "15/Agosto/2022"
        })
    }, [])

    return (
        <UserContext.Provider value={user}>
            { children }
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}