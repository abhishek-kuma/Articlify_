'use client';
import { createContext, useContext, useState } from "react";
const loginContext = createContext({});
interface Props {
    children: React.ReactNode
}

export const LoginContextProvider = ({ children }: Props) => {
    const [status, setStatus] = useState<boolean>(false);
    const [name , setName] = useState<string>("");
    const [userid , setUserid] = useState<string>("");

    return (
        <loginContext.Provider value={{ status , setStatus,name , setName ,userid,setUserid}}>
            {children}
        </loginContext.Provider>
    )
}

export const useLoginContext = () => useContext(loginContext);
