import {createContext, useState} from 'react';

type Setter = React.Dispatch<React.SetStateAction<string>>;

interface IUserContext {
    state: {
        username: string,
        name: string,
        phone: string,
        email: string,
        password: string,
    },
    actions: {
        setUsername: Setter,
        setName: Setter,
        setPhone: Setter,
        setEmail: Setter,
        setPassword: Setter,
    }
}

const UserContext = createContext<IUserContext>({
    state: {
        username: '',
        name: '',
        phone: '',
        email: '',
        password: '',
    },
    actions: {
        setUsername: () => {},
        setName: () => {},
        setPhone: () => {},
        setEmail: () => {},
        setPassword: () => {},
    }    
})

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const value:IUserContext = {
        state: {
            username,
            name,
            phone,
            email,
            password,
        },
        actions: {
            setUsername,
            setName,
            setPhone,
            setEmail,
            setPassword,
        }
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

export default UserContext;