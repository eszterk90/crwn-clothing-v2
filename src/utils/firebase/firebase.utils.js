import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from 'firebase/auth'
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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// instantiate our database:
export const db = getFirestore();

// async function that receives a user documentation object from logGoogleUser:
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    // check if there is a user document reference. 
    // userDocRef = doc() - that takes three arguments: first: database, second: collections, third: identifier. 
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
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt, 
                ...additionalInformation
            })
        }
        catch (error) {
            console.log('error creating the user', error.message);
        }
          

    }
    // if user data exists --> return userDocRef
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => {
    signOut(auth);
}
// onAuthStateChangedListener will call the callback whenever the authentication state of auth change --> e.g. sing-in / sign-out
export const onAuthStateChangedListener = (callback) => (onAuthStateChanged(auth, callback))



