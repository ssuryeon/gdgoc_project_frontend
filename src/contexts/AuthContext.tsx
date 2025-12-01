import {createContext, useState} from 'react';

type Setter = React.Dispatch<React.SetStateAction<string>>;

interface IAuthContext {
    accessToken: string,
    setAccessToken: Setter,
}

export const AuthContext = createContext<IAuthContext>({
    accessToken: '',
    setAccessToken: () => {},
})

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState('');
    const value:IAuthContext = {
        accessToken: auth,
        setAccessToken: setAuth,
    }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}