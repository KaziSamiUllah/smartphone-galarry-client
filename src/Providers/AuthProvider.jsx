import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";



export const AuthContext = createContext(null);


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)
//  console.log(user)

const auth = getAuth(app);
/////////////Auth with Email and Password////////////////////////
    //Sign Up with email and password
    const signUp = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in with email and password
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    
///////////////////////////////Auth with Gmail///////////////////////////////////
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = ()=>{
    setLoading(true)
    signInWithPopup(auth, googleProvider )
}
///////////////////////////////Auth with Git-Hub///////////////////////////////////

const githubProvider = new GithubAuthProvider();
const SignInWithGitHub = ()=>{
    setLoading(true);
    signInWithPopup(auth, githubProvider)
}











    //Sign Out 
    const signout = () => {
        setLoading(true)
        return signOut(auth);
    }

    // Keep the user login state on watch
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
           
        })
        return () => {
            //CleanUP
            unSubscribe(); 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    const contextData = {user,setUser, signUp, signIn, signout, loading ,setLoading ,signInWithGoogle, SignInWithGitHub}

    return (
       <AuthContext.Provider value={contextData}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;