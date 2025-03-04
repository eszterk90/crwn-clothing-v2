// import Directory from './components/directory/directory-component'
import Home from './routes/home/Home'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth} from './utils/firebase/firebase.utils'
import {setCurrentUser} from './store/user/user.action';



const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
        // if a user comes through (old or new) after the createUserDocumentFromAuth
        if(user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
}, [])
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>} />
        <Route path='shop/*' element={<Shop/>} />
        <Route path='auth' element={<Authentication/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes> 
  )
};

export default App;
