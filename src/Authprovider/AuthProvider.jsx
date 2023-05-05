import React, { createContext, useEffect,useState} from 'react';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/__firebase.config';

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [users, setUsers] =useState(null);
    const [spinner, setSpinner] = useState(true)
    
    const createUser = (email,password) => {
        setSpinner(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin= (email,password) => {
        setSpinner(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handlelogOut = () => {
        setSpinner(true)
        return signOut(auth)
    }
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth,(logedUser => {
            setUsers(logedUser)
            setSpinner(false)
        }))
        return unsubscribe;
    },[])

    const googleSignin = () => {
        return signInWithPopup(auth,provider)
    }

    const gitSignIn = () => {
        return signInWithPopup(auth,gitProvider)
    }
    const useerupdateProfile = (currentuser,name,photoUrl) => {
       return updateProfile(currentuser,{
            displayName:name,photoURL:photoUrl
        })
    }

    const user={
        createUser,
        handleLogin,
        users,
        handlelogOut,
        spinner,
        googleSignin,
        gitSignIn,
        useerupdateProfile
    }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;