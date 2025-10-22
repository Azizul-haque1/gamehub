import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    const createUserFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUserFunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateProfileFunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })

    }

    const sendPasswordResetEmailFunc = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const sendEmailVerificationFunc = () => {
        return sendEmailVerification(auth.currentUser)
    }



    const signOutFunc = () => {
        return signOut(auth)
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
        signOutFunc,
        signInUserFunc,
        sendPasswordResetEmailFunc



    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;