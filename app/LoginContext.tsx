'use client';
import { createContext, useContext, useState } from "react";
const loginContext = createContext({});
interface Props {
    children: React.ReactNode
}

export const LoginContextProvider = ({ children }: Props) => {
    const [status, setStatus] = useState<boolean>(false);

    return (
        <loginContext.Provider value={{ status , setStatus }}>
            {children}
        </loginContext.Provider>
    )
}

export const useLoginContext = () => useContext(loginContext);
