import React, { createContext, useEffect, useState } from 'react';
import app from '../Hooks/firebase.init';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
	const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);
 
	const googleProvider = new GoogleAuthProvider();
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(currentUser);
      setIsLoading(false);
      return () => {
				unsubscribe();
			};
		});
	}, []);


  const googleSignIn = () => {
    	return signInWithPopup(auth, googleProvider)
  }
	const authInfo = { user,isLoading, createUser, signIn, logOut, googleSignIn };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default UserContext;
