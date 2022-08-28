import React from 'react'
import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles'
import {useDispatch, useSelector} from 'react-redux'
import {selectCartCount, selectIsCartOpen} from '../../store/cart/cart.selector'
import {setIsCartOpen} from '../../store/cart/cart.action'


// import {CartContext} from '../../contexts/cart-item.context'

function CartIcon() {

// const totalAmount = () => {
//   let sum = 0;
//   cartItems.map(item => sum += item.quantity)
//   return sum;
// }

//  const {setIsCartOpen, open, cartCount} = useContext(CartContext)

  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount);
  const open = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!open));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon