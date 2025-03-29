import { useState, useRef } from "react";
import validateForm from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const handleSignIn = () => {
    setSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passValue = password.current.value;
    const name = !isSignIn ? displayName.current.value : null;

    const message = validateForm(emailValue, passValue, name);
    setErrorMessage(message);

    if (!Object.keys(message).length) {
      if (!isSignIn) {
        createUserWithEmailAndPassword(auth, emailValue, passValue)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name,
              photoURL: "https://avatars.githubusercontent.com/u/175826425?v=4",
            }).then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, name: displayName, photoURL }));
            });
          })
          .catch((error) => {
            setErrorMessage({ general: error.message });
          });
      } else {
        signInWithEmailAndPassword(auth, emailValue, passValue)
          .then((userCredential) => {
            // Handle sign-in success
          })
          .catch((error) => {
            setErrorMessage({ general: error.message });
          });
      }
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_small.jpg)" }}>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4">
        <form onSubmit={(event) => event.preventDefault()} className="bg-black bg-opacity-75 p-6 sm:p-8 rounded-lg flex flex-col gap-4 w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          <input ref={email} className="w-full p-3 text-white bg-gray-700 bg-opacity-50 rounded-md outline-none" type="text" placeholder="Enter email" />
          {errorMessage.email && <p className="text-red-500 text-sm">{errorMessage.email}</p>}
          {!isSignIn && (
            <>
              <input ref={displayName} type="text" placeholder="Full Name" className="w-full p-3 text-white bg-gray-700 bg-opacity-50 rounded-md outline-none" />
              {errorMessage.name && <p className="text-red-500 text-sm">{errorMessage.name}</p>}
            </>
          )}
          <input ref={password} className="w-full p-3 text-white bg-gray-700 bg-opacity-50 rounded-md outline-none" type="password" placeholder="Enter password" />
          {errorMessage.password && <p className="text-red-500 text-sm">{errorMessage.password}</p>}
          <button onClick={handleButtonClick} className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-2 rounded-md transition duration-200">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          {errorMessage.general && <p className="text-red-500 text-sm text-center">{errorMessage.general}</p>}
          <p className="text-white text-center text-sm cursor-pointer hover:underline" onClick={handleSignIn}>
            {isSignIn ? "New to Netflix? Sign up now" : "Already a User? Sign In now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
