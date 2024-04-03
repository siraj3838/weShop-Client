import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxios from "../Hook/useAxios";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const myAxios = useAxios();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLoginUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false)


            if (currentUser) {

                myAxios.post('/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            else {
                myAxios.post('/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }





        });
        return () => {
            unSubscribe();
        }
    }, [myAxios, user?.email])

    const myAuth = {
        loading,
        user,
        createUser,
        loginUser,
        googleLoginUser,
        logOutUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={myAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;