import { createContext } from 'react';

// Context holds siginIn and user values
// const LoginContext = createContext({signedIn: false,setSignedIn: (signedIn: boolean) => {}, user: user, setUser:(user: IUser | null) => {}});
const LoginContext = createContext({signedIn: false,setSignedIn: (signedIn: boolean) => {}, unread: 0,setUnread: (unread: number) => {}});
export default LoginContext;