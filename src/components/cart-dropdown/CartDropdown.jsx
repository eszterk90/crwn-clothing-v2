import React from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/Button'
import {CartContext} from '../../contexts/cart-item.context'

function CartDropdown() {

  return (
    <div className="cart-dropdown-container">
        <div className='cart-items'/>
        <Button>Go to checkout</Button>
    </div> 
  )
}

export default CartDropdown