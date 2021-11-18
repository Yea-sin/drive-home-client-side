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

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const singInUsingGoogle = () => {
    setIsloading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((e) => setError(e.message))
      .finally(setIsloading(false));
  };

  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setError("");
        setUser({});
      })
      .catch((e) => setError(e.message))
      .finally(setIsloading(false));
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
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => setError(""))
          .catch((e) => setError(e.message));
      })
      .catch((e) => setError(e.message))
      .finally(setIsloading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // setUser(result.user);
        setError("");
        const redirect = location.state?.from || "/";
        history.replace(redirect);
      })
      .catch((e) => setError(e.message))
      .finally(setIsloading(false));
  };

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

  /* 
  {user?.email ? (
        <Box sx={{ my: 2 }}>
          <Button
            onClick={logOut}
            variant="contained"
            sx={{ py: 2 }}
            type="submit">
            Sing Out
          </Button>
        </Box>
      ) : (
        <Box sx={{ my: 2 }}>
          <Button
            onClick={handleLogIn}
            variant="contained"
            sx={{ py: 2 }}
            type="submit">
            Sing In Using Google
          </Button>
        </Box>
      )}
   */

  return {
    loginUser,
    registerUser,
    singInUsingGoogle,
    logOut,
    isLoading,
    user,
    error,
  };
};

export default useFirebase;
