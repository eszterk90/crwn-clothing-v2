import {Fragment, useContext} from 'react' // a content wrapper for cases we do not want to render anything with it
import {Outlet, Link} from 'react-router-dom'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import {CartContext} from '../../contexts/cart-item.context.js'
import {UserContext} from '../../contexts/user.context'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {handleOpen, open} = useContext(CartContext);

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'> 
                <CrwnLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {currentUser ? 
                  (<span className='nav-link' onClick={signOutUser}>
                  {' '}
                SIGN OUT {' '}
                </span>)
                 : 
                (<Link className='nav-link' to='/auth'>
                    SIGN IN
                </Link>)} 
                <CartIcon/>
            </div>
            {open && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  }

export default Navigation