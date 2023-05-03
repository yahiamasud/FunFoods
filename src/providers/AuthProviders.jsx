import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, updateCurrentUser, GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";

export const AuthContext =createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const gitAuthProvider = new GithubAuthProvider();


const AuthProviders = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading ,setLoading]=useState(true);
    
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const singInGoogle =()=>{
        setLoading(true);
        return signInWithPopup (auth, googleAuthProvider);
    };

    const gitLoginIn =()=> {
        setLoading(true);
        return signInWithPopup(auth,  gitAuthProvider)
    };

    const singIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    };
    
    const logOut =()=>{
        return signOut(auth);
    };

    const updataprofile =(name, photo)=>{
        return updateProfile(auth, currentUser,{
            display: name , photoURL: photo
        })
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
        gitLoginIn,
        updataprofile,
        logOut
        
    };
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;