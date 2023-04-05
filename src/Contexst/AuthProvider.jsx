import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SignUp
  const SinUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login
  const LogInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const EmailVerification = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  // ==> Google LogIn <===//
  const GoogleLogin = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };
  //LogOut
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Set User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    SinUpWithEmail,
    LogInWithEmail,
    GoogleLogin,
    loading,
    EmailVerification,
    LogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
