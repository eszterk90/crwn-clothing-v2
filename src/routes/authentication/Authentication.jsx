import React from 'react'
import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up/SignUpForm'
import SignInForm from '../../components/sign-in/SignInForm'



function Authentication() {

// on first mount run the useEffect: inside call the asyncrhonous getRedirectResult. If authentication successful -> give response 
    // useEffect(async () => {
    //     // if the authentication happened --> give back the result of the redirect as a response
    //     const response = await getRedirectResult(auth);
    //     console.log(response);

    //     // if response true --> generate the user doc reference
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);


   // const logGoogleRedirectUser = async () => {
        // destructure the response that we get after successfully signing in, to get the user object
       // const {user} = await signInWithGoogleRedirect();
       // console.log(user) // --> console.log not visible, because any code after the redirecting won't be triggered, since we left the page, so that it unmounts. When we come back it mounts again for the first time --> we see the sign in page
        // create user
        //const userDocRef = await createUserDocumentFromAuth(user);
    //}

  return (
    <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}

export default Authentication