import React from 'react'
// import {CartContext} from '../../contexts/cart-item.context'
import {useSelector} from 'react-redux'
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles'
import CheckOutItem from '../../components/checkout/CheckoutItem'
import {selectCartItems, selectCartTotal} from '../../store/cart/cart.selector'

function Checkout() {

// const {cartItems, cartTotal} = useContext(CartContext);

const cartItems = useSelector(selectCartItems);
const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem, index) => 
            <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
        )}
    
        <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout