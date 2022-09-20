import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const authContext = createContext();

//Hook for use the context
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //signup a user in firebase
  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  //Login function with firebase
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    //console.log(user);
  };

  //Logout
  const logout = async () => {
    await signOut(auth);
  };

  //Login with google credentials
  const loginWithGoogle =async ()=>{
    const googleProvider = new GoogleAuthProvider();//Objeto de google
    await signInWithPopup(auth, googleProvider);//Logea con nuestra cuenta de google
    //console.log(user);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    //..
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <authContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        loginWithGoogle
      }}
    >
      {children}
    </authContext.Provider>
  );
}
