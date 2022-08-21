import React, {useContext} from 'react'
import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles'
import {CartContext} from '../../contexts/cart-item.context'

function CartIcon() {

// const totalAmount = () => {
//   let sum = 0;
//   cartItems.map(item => sum += item.quantity)
//   return sum;
// }

 const {setIsCartOpen, open, cartCount} = useContext(CartContext)

 const toggleIsCartOpen = () => setIsCartOpen(!open);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon