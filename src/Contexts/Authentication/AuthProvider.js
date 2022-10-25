import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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



   const authInfo = {
      user,
      createUser,
      login,
      updateUserProfile
   };
   
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;