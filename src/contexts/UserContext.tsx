import {createContext, useState} from 'react';

type Setter = React.Dispatch<React.SetStateAction<string>>;

interface IUserContext {
    state: {
        username: string,
        name: string,
        phone: string,
        email: string,
        password: string,
        nickname: string,
        avatar_url: string,
    },
    actions: {
        setUsername: Setter,
        setName: Setter,
        setPhone: Setter,
        setEmail: Setter,
        setPassword: Setter,
        setNickname: Setter,
        setAvatarUrl: Setter,
    }
}

export const UserContext = createContext<IUserContext>({
    state: {
        username: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        nickname: '',
        avatar_url: '',
    },
    actions: {
        setUsername: () => {},
        setName: () => {},
        setPhone: () => {},
        setEmail: () => {},
        setPassword: () => {},
        setNickname: () => {},
        setAvatarUrl: () => {},
    }    
})

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [avatar_url, setAvatarUrl] = useState('');

    const value:IUserContext = {
        state: {
            username,
            name,
            phone,
            email,
            password,
            nickname,
            avatar_url,
        },
        actions: {
            setUsername,
            setName,
            setPhone,
            setEmail,
            setPassword,
            setNickname,
            setAvatarUrl,
        }
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
