import React from 'react'
import './sign-in.styles.scss'
import {SignInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

function SignIn() {
    const logGoogleUser = async () => {
        // destructure the response that we get after successfully signing in, to get the user object
        const {user} = await SignInWithGooglePopup();
        // create user
        const userDocRef = await createUserDocumentFromAuth(user);
    }
  return (
    <div>
        <button onClick={logGoogleUser}>Sign in with google Popup</button>
    </div>
  )
}

export default SignIn