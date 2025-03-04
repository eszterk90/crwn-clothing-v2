import React from 'react'
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
// import {CartContext} from '../../contexts/cart-item.context'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectCartItems} from '../../store/cart/cart.selector'

function CartDropdown() {

  // const {cartItems, addItemToCart} = useContext(CartContext);
  const cartItems  = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
        <CartItems>
        {cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)): (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer> 
  )
}

export default CartDropdown