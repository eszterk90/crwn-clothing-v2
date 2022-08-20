import React, {useState} from 'react'
import {
    createUserDocumentFromAuth, 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/FormInput'
import {SignUpContainer, ButtonsContainer} from './sign-in-form.styles'
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button'


const defaultFormFields = {
    email: '',
    password: '',
}
function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

   const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        // destructure the response that we get after successfully signing in, to get the user object
        await signInWithGooglePopup();
    
       
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }

     
        catch (error) {
        switch(error.code) {
            case 'auth/wrong-password':
            alert('incorrect password for email');
            break;

            case 'auth/user-not-found': 
            alert('no user associated with this email');
            break;

            default:
                console.log(error);
            }
          
        }
    }
        
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

  return (
    <SignUpContainer>
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
        <FormInput
            label='Email' 
            type="email" 
            name='email' 
            required 
            defaultValue={email}
            onChange={handleChange}
        />

        <FormInput
        label='Password' 
        type="password" 
        name='password' 
        required 
        defaultValue={password}
        onChange={handleChange}
        />

        <ButtonsContainer>
            <Button type="submit">Sign in</Button>
            <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
        </ButtonsContainer>
        
        </form>
    </SignUpContainer>
  )
}

export default SignInForm;