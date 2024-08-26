import { useState , useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

 


    const handleButtonClick = () =>{
        //  Validate the form data
        // console.log(email.current.value);
        // console.log(password.current.value);
        
        
   const message= checkValidData(email.current.value , password.current.value, name.current.value)

//    console.log(message);
   setErrorMessage(message);
//    once i proceed (means validated both email & password and not get any error message)
// then i do sign In / sign Up form

if(message) return;

// SignUP Logic

if(!isSignInForm)
{

    createUserWithEmailAndPassword(auth, 
        email.current.value , 
        password.current.value, 
        )

         .then((userCredential) => {
                // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, 
                photoURL: "https://avatars.githubusercontent.com/u/112095415?s=400&u=7437601668ac21e28d12c404c2139121bbbbc14d&v=4"
              })
              
              .then(() => {
                // Profile updated!
                // ...
                const {uid, email, displayName , photoURL } = auth.currentUser;
                dispatch(addUser({uid: uid, email: email , displayName: displayName, photoURL: photoURL}))
                navigate("/browse");
              }).catch((error) => { 
                // An error occurred
                // ...
                setErrorMessage(error.message )
              });
              console.log(user)
              
                // ...
           })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ " - " + errorMessage);
           // ..
           });
         }
else{
// Sign In Logic
signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage)
  });

}



    }

    const toggleSignInForm = () => {
            setIsSignInForm(!isSignInForm);
    }

    return(
        <div className=" ">
            <Header/>

            <div className="absolute">
          
             <img className="w-screen " src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />
            </div>
                     <form 
                     onSubmit={(e) => e.preventDefault()}
                     className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                     <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                 {!isSignInForm && <input 
                    ref = {name}
                    type="text" 
                    placeholder="Full Name" 
                    className="p-4 my-4 w-full bg-gray-700 text-lg rounded-lg" />}

                    <input 
                    ref={email}
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 my-4 w-full bg-gray-700 text-lg rounded-lg" />

              

                    <input 
                    ref = {password}
                    type="password" 
                    placeholder="password" 
                    className="p-4 my-4 w-full bg-gray-700 text-lg rounded-lg" />

                       <p className="text-red-500">{errorMessage}</p>

                    <button className="p-4 my-6 bg-red-700 w-full text-lg rounded-lg"
                    onClick={handleButtonClick}
                    >{isSignInForm ? "Sign In" : "Sign Up"}
                        </button>
                        <p className="py-4 text-xl cursor-pointer"
                        onClick={toggleSignInForm}>
                            {isSignInForm ? " New To Netflix? Sign Up Now" : "Already registered? Sign In"}
                           
                        </p>
                     </form>



        </div>
    )


}

export default Login;