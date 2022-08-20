import React from 'react'
import {CartItemContainer, ItemDetails} from './cart-item.styles'
// import {UserContext} from '../../contexts/user.context'
// import {ProductsContext} from '../../contexts/categories.context'
// import {CartContext} from '../../contexts/cart-item.context'

function CartItem({cartItem}) {
    const {name, imageUrl, price, quantity} = cartItem;
  return (
    <CartItemContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </ItemDetails>
       
    </CartItemContainer>
  )
}

export default CartItem