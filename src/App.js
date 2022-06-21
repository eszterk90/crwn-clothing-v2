// import Directory from './components/directory/directory-component'
import Home from './routes/home/Home'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import SingIn from './routes/sign-in/SignIn'



const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='sign-in' element={<SingIn/>} />
      </Route>
    </Routes> 
  )
};

export default App;
