import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const signWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }



    const createUserFunc = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUserFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateProfileFunc = (displayName, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })

    }

    const sendPasswordResetEmailFunc = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    const sendEmailVerificationFunc = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }



    const signOutFunc = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscirbe()
        }
    }, [])



    const userInfo = {
        user,
        setUser,
        createUserFunc,
        loading,
        setLoading,
        updateProfileFunc,
        sendEmailVerificationFunc,
        signOutFunc,
        signInUserFunc,
        sendPasswordResetEmailFunc,
        signWithGoogle
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;