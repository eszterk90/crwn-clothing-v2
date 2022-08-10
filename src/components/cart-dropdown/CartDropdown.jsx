import React, {useContext} from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import {CartContext} from '../../contexts/cart-item.context'

function CartDropdown() {

  const {cartItems, addItemToCart} = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
        <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
        </div>
        <Button>Go to checkout</Button>
    </div> 
  )
}

export default CartDropdown