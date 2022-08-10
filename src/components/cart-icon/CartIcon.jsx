import React, {useContext, useState} from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {CartContext} from '../../contexts/cart-item.context'

function CartIcon() {

// const totalAmount = () => {
//   let sum = 0;
//   cartItems.map(item => sum += item.quantity)
//   return sum;
// }

 const {toggleIsCartOpen, cartCount} = useContext(CartContext)

 
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon