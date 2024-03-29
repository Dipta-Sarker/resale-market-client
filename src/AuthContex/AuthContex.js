import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
export const contexApi = createContext()

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContex = ({children}) => {

    const [user, setUser] = useState([])
    const [loadding,setLoadding]=useState(true)

    const createUser = (email,password) =>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email,password) =>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const google = () =>{
        setLoadding(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        setLoadding(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const subscribs = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoadding(false)
        })
        return () => subscribs;
    },[]) 





    const authInfo ={loadding,user,logOut,createUser,loginUser,google}
    return (
        <contexApi.Provider value={authInfo}>
            {children}
        </contexApi.Provider>
    );
};

export default AuthContex;