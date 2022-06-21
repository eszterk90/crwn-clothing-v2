import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
// to set up our database import getFirestore. Import doc to get the document and getDoc, setDoc to get and set the data of the document.
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0uNhQlUQ7sbjxqS0E5uE6JhAQOBQCS_M",
    authDomain: "crwn-clothing-db-6d771.firebaseapp.com",
    projectId: "crwn-clothing-db-6d771",
    storageBucket: "crwn-clothing-db-6d771.appspot.com",
    messagingSenderId: "285487839986",
    appId: "1:285487839986:web:e20369fba3f4c12864ee6b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

// instantiate our database:
export const db = getFirestore();

// async function that receives a user documentation object from logGoogleUser:
export const createUserDocumentFromAuth = async (userAuth) => {
    // check if there is a user document reference. 
    // userDocref = doc() - that takes three arguments: first: database, second: collections, third: identifier. 
    // after user authentication we get a response with the user object. we can use it to access the unique id and use it as identifier. (user = userAuth)
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    // to get the data related to a document
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot) // points to the same identifier as userDocRef - but this is a special object because it enables us to check if that object exists
    console.log(userSnapshot.exists())

    // if user data does not exist --> create / set document with the data from the userAuth in my collection

    if(!userSnapshot.exists()) {
        // destructure display name and email from the user object that I get back after log in
        const {displayName, email} = userAuth;

        // to keep track of when the users log in
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt})
        }
        catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    // if user data exists --> return userDocRef
    return userDocRef;
}



