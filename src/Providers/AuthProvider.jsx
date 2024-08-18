import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.config";


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  // Sign Up with email and password
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Auth with Google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Auth with GitHub
  const githubProvider = new GithubAuthProvider();
  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Keep the user login state on watch
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      // CleanUP
      unSubscribe();
    };
  }, [auth]);

  const contextData = {
    user,
    setUser,
    signUp,
    signIn,
    signOut: signOutUser,
    loading,
    setLoading,
    signInWithGoogle,
    signInWithGitHub,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
