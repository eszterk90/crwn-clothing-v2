import {Fragment, useContext} from 'react' // a content wrapper for cases we do not want to render anything with it
import {Outlet, Link} from 'react-router-dom'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import {CartContext} from '../../contexts/cart-item.context.js'
import {UserContext} from '../../contexts/user.context'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles'
import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {handleOpen, open} = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'> 
                <CrwnLogo className='logo'/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ? 
                  (<NavLink as='span' onClick={signOutUser}>
                  {' '}
                SIGN OUT {' '}
                </NavLink>)
                 : 
                (<NavLink to='/auth'>
                    SIGN IN
                </NavLink>)} 
                <CartIcon/>
            </NavLinks>
            {open && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

export default Navigation