import React, {useEffect} from 'react'
import './sign-in.styles.scss'
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import {getRedirectResult} from 'firebase/auth'
import SignUpForm from '../../components/sign-up/SignUpForm'

function SignIn() {


// on first mount run the useEffect: inside call the asyncrhonous getRedirectResult. If authentication successful -> give response 
    useEffect(async () => {
        // if the authentication happened --> give back the result of the redirect as a response
        const response = await getRedirectResult(auth);
        console.log(response);

        // if response true --> generate the user doc reference
        if(response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, []);


    const logGoogleUser = async () => {
        // destructure the response that we get after successfully signing in, to get the user object
        const {user} = await signInWithGooglePopup();
        // create user
        const userDocRef = await createUserDocumentFromAuth(user);
    }


   // const logGoogleRedirectUser = async () => {
        // destructure the response that we get after successfully signing in, to get the user object
       // const {user} = await signInWithGoogleRedirect();
       // console.log(user) // --> console.log not visible, because any code after the redirecting won't be triggered, since we left the page, so that it unmounts. When we come back it mounts again for the first time --> we see the sign in page
        // create user
        //const userDocRef = await createUserDocumentFromAuth(user);
    //}
  return (
    <div>
        <button onClick={logGoogleUser}>Sign in with google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with google Redirect</button> */}
        <SignUpForm/>
    </div>
  )
}

export default SignIn