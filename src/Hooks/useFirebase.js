import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const singInUsingGoogle = () => {
    setIsloading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsloading(false));
  };

  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setError("");
        setUser({});
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsloading(false));
  };

  const registerUser = (email, password, history, name) => {
    setIsloading(true);
    // updateProfile(auth.currentUser, { displayName: name }).then(() => {});
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        history.replace("/");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => setError(""))
          .catch((e) => setError(e.message));
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsloading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const redirect = location.state?.from || "/";
        history.replace(redirect);
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    fetch(`https://glacial-beach-45386.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    setIsloading(false);
    return () => unSubscribed;
  }, []);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://glacial-beach-45386.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    loginUser,
    registerUser,
    singInUsingGoogle,
    logOut,
    admin,
    isLoading,
    user,
    error,
  };
};

export default useFirebase;
