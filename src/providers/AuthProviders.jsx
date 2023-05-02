import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";

export const AuthContext =createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser]=useState(null);
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const singIn = (email , password) => {
        return signInWithEmailAndPassword(auth,email.password)
    };

    const logOut =()=>{
        return signOut(auth);
    }
    const Authinfo = {
        user,
        createUser,
        singIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;