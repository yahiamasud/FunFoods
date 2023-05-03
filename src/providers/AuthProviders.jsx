import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, updateCurrentUser, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

export const AuthContext =createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading ,setLoading]=useState(true);
    
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const singInGoogle =()=>{
        return signInWithPopup (auth, googleAuthProvider);
    }

    const singIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    };
    
    const logOut =()=>{
        return signOut(auth);
    }

    const profileUpdateNamePhoto =(name, photoURL)=>{
        updateProfile(auth, updateCurrentUser,{ display: name , photoURL})
        
    }

    // ===============================================================
    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged( auth , loggedUser=>{ 
        setUser(loggedUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
        
    },[])

    // =============================================================
    const Authinfo = {
        user,
        loading,
        createUser,
        singIn,
        singInGoogle,
        profileUpdateNamePhoto,
        logOut
        
    };
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;