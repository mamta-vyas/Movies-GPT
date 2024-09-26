import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import React from "react";

const Header = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((store) => store.user.userInfo);
const showGptSearch  = useSelector(store => store.gpt.showGptSearch)
 
const handleSignOut = () => {
     signOut(auth).then(() => {
    // navigate("/");
  // Sign-out successful.
       }).catch((error) => {
        navigate("/error")
  // An error happened.
       });
}

useEffect(() => {
 
  const unsubscribe = onAuthStateChanged(auth , (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName , photoURL } = user;
      dispatch(addUser({
        uid: uid, 
        email: email , 
        displayName: displayName, 
        photoURL: photoURL
      })
    );
        navigate("/browse");
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/");
    }
  }); 

  // unsubscribe when component unmounts
  return () => unsubscribe();

},[]);

const handleGptSearchClick = () => {
dispatch(toggleGptSearchView());

}

const handleLanguageChange = (e) => {
// console.log(e.target.value);
dispatch(changeLanguage(e.target.value))
}
 
return (
    <div className="absolute w-screen px-4 md:px-8 py-0 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  md:justify-between">
       <img className ="w-16 md:w-32 mx-auto md:mx-0 md:bg-opacity-10" src={LOGO} alt="logo" />
       {user &&  (
        <div className="flex p-0 md:p-2">
         { showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => 
            (<option key={lang.identifier} value={lang.identifier}>
            {lang.name}
         </option>
        ))}
         </select>
        )}
          <button className="py-2 px-2 md:px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
        </button>
        <img 
        className="hidden md:blocks w-12 h-12"
        src={user?.photoURL} alt="user-icon" 
      />
        <button onClick={handleSignOut} className="font-bold text-white"> (Sign Out) </button>
     </div>)}
</div>
  )
}
export default Header

