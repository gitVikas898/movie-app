import { signOut } from "firebase/auth";
import { LOGO_URL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleSearchView } from "../utils/gptSlice";
import supportedLanguages from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showgptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="bg-gradient-to-b from-black w-full flex items-center justify-between p-4 fixed z-30 shadow-md">
      <div id="left">
        <img src={LOGO_URL} alt="netflix-logo" className="max-w-40 sm:max-w-32 cursor-pointer" />
      </div>
      {user && (
        <div id="right" className="flex items-center gap-4">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="text-white bg-gray-900 p-2 rounded-md outline-none cursor-pointer border border-gray-700 hover:border-gray-500 transition-all"
            >
              {supportedLanguages.map((language) => (
                <option key={language.identifier} value={language.identifier}>{language.name}</option>
              ))}
            </select>
          )}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <div className="flex flex-col items-center gap-2">
            <img src={user.photoURL} alt="USER" className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-sm" />
          </div>
          <button
            className="text-white bg-red-600 rounded-lg px-4 py-2 font-semibold hover:bg-red-700 transition-all"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
