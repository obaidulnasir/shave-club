import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  //   google signIn
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //  logout
  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  //   user registration by email, pass
  const handleUserRegister = (email, password, location, history) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      setUser(result.user);
      alert(`Welcome to Shave Club!  your registration successful.`)
      const destination = location.state.from||'/';
      history.replace(destination);
      // handleRegisterUserInfo(email, name);
    })
    .catch((error) => {
      setError(error.message)
      // alert(error);
    });
  };

  //   user login by email password
  const handleUserLogin = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        const destination = location.state.from||'/';
      history.replace(destination);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };


  //   on auth stage change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
  }, [user, auth]);

  return {
    isLoading,
    user,
    error,
    signInWithGoogle,
    handleLogout,
    handleUserLogin,
    handleUserRegister
  };
};

export default useFirebase;