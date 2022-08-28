import React from 'react'
// import {CartContext} from '../../contexts/cart-item.context'
import {useSelector, useDispatch} from 'react-redux'
import {selectCartItems} from '../../store/cart/cart.selector'
import {addItemToCart, clearItemFromCart, removeItemFromCart} from '../../store/cart/cart.action'

import {
  CheckoutItemContainer, 
  ImageContainer, 
  Name, 
  Quantity, 
  Price, 
  Value, 
  RemoveButton, 
  Arrow} from './checkoutItem.styles'

function CheckoutItem({cartItem}) {

const {name, imageUrl, price, quantity} = cartItem;
const dispatch = useDispatch();
const cartItems = useSelector(selectCartItems);

// const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name}/>
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity>
        <Arrow onClick={removeItemHandler}>
            &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
            &#10095;
        </Arrow>
        </Quantity>
        <Price>${price * quantity}</Price>
        <RemoveButton onClick={clearItemHandler}>
        &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem