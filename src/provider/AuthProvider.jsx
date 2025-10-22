import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()


    const createUserFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfileFunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })

    }
    const sendEmailVerificationFunc = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscirbe()
        }
    }, [])



    const userInfo = {
        user,
        setUser,
        createUserFunc,
        updateProfileFunc,
        sendEmailVerificationFunc,


    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;