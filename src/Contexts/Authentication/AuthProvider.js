import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);


   // create user
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // verify email
   const verifyUserEmail = () => {
      return sendEmailVerification(auth.currentUser);
   }

   // User signin email, password
   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   // update profile
   const updateUserProfile = (profile) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profile);
   }

   // provider login
   const providerLogin = (provider) => {
      return signInWithPopup(auth, provider);
   }

   // on auth state change
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser)
         }
         setLoading(false);
      });

      return () => {
         unsubscribe();
      }
   }, [user]);

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }


   const authInfo = {
      user,
      createUser,
      login,
      updateUserProfile,
      logOut,
      loading,
      setLoading,
      providerLogin,
      verifyUserEmail
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;