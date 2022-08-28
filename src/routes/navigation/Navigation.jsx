import {Fragment} from 'react' // a content wrapper for cases we do not want to render anything with it
import {Outlet, Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

import {selectIsCartOpen} from '../../store/cart/cart.selector'

// import {CartContext} from '../../contexts/cart-item.context.js'
import { selectCurrentUser } from '../../store/user/user.selector'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles'
import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () => {
// whenever calling the useSelector method -> it returns the whole state object from the store. If you want the user reducer, you have to access it through the state like: state.user.<property>
  const currentUser = useSelector(selectCurrentUser);
  const open = useSelector(selectIsCartOpen);
  // const {currentUser} = useContext(UserContext);
  // const {handleOpen, open} = useContext(CartContext);

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