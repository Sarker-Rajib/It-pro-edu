import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);


   // create user
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // User signin email, password
   const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   }

   // update profile
   const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
   }

   // on auth state change
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser)
         }
      });

      return () => {
         unsubscribe();
      }
   }, []);


   const authInfo = {
      user,
      createUser,
      login,
      updateUserProfile,
      setUser
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;