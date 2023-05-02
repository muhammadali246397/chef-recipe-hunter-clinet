import React, { createContext, useEffect,useState} from 'react';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/__firebase.config';
const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [users, setUsers] =useState(null);
    const [spinner, setSpinner] = useState(true)
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin= (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handlelogOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth,(logedUser => {
            setUsers(logedUser)
            setSpinner(true)
        }))
        return unsubscribe;
    },[])


    const user={
        createUser,
        handleLogin,
        users,
        handlelogOut,
        spinner,
    }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;