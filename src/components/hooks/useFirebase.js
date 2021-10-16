import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
        const [user, setUser] = useState({});

        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();

        const signInWithGoogle = () => {
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                setUser(result.user);
                                console.log(result.user);
                        })
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
                })
                return unsubscribe;
        }, [])


        // Log Out:
        const logOut = () => {
                signOut(auth)
                        .then(() => {
                                setUser({});
                        });
        }

        return {
                user,
                signInWithGoogle,
                logOut
        }
}

export default useFirebase;