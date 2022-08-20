import React, {useContext, useState} from 'react'
import {CartContext} from '../../contexts/cart-item.context'
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

const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

const clearItemHandler = () => clearItemFromCart(cartItem);

const addItemHandler = () => addItemToCart(cartItem);

const removeItemHandler = () => removeItemFromCart(cartItem);

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