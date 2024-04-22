import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Set initial loading state to false

  const createUser = (email, password) => {
    setLoading(true); // Set loading state to true when starting user creation
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful user creation
        const newUser = userCredential.user;
        setUser(newUser);
        setLoading(false); // Set loading state to false after successful creation
        return newUser;
      })
      .catch((error) => {
        // Handle errors
        setLoading(false); // Set loading state to false in case of error
        console.error("Error creating user:", error);
        throw error;
      });
  };
  const loginwithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)


  }
  const signout=()=>{
     return auth.signOut();
  }
  const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser)
      setUser(currentUser);
    });
    return ()=>{
        unsubscribe();

    }
  }, []);
  const authInfo = { createUser, user,loginwithGoogle ,loading,login,signout}; // Include other auth-related functions here if needed

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
