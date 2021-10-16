import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
        const [user, setUser] = useState({});
        const [isLoading, setIsLoading] = useState(true);

        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();

        const signInWithGoogle = () => {
                setIsLoading(true);
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                setUser(result.user);
                                console.log(result.user);
                        })
                        .finally(() => setIsLoading(false));
        };

        // Observe User State Change:
        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, user => {
                        if (user) {
                                setUser(user);
                        }
                        else {
                                setUser({});
                        }
                        setIsLoading(false);
                })
                return unsubscribe;
        }, [])


        // Log Out:
        const logOut = () => {
                setIsLoading(true);
                signOut(auth)
                        .then(() => {
                                setUser({});
                        })
                        .finally(() => setIsLoading(false));
        }

        return {
                user,
                isLoading,
                signInWithGoogle,
                logOut
        }
}

export default useFirebase;