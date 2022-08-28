import React from 'react'
import {ProductCardContainer, Footer} from './product-card.styles'
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button'
// import {ProductsContext} from '../../contexts/products.context'
// import {CartContext} from '../../contexts/.context'
import {useDispatch, useSelector} from 'react-redux'
import {addItemToCart} from '../../store/cart/cart.action'
import {selectCartItems} from '../../store/cart/cart.selector'

function ProductCard({product}) {

// const {addItemToCart} = useContext(CartContext);
const cartItems = useSelector(selectCartItems)
const dispatch = useDispatch();
const addProductToCart = () => dispatch(addItemToCart(cartItems, product));


  return (
    <ProductCardContainer>
        <img src={product.imageUrl} alt='product'/>
        <Footer>
            <span className='name'>{product.name}</span>
            <span className='price'>${product.price}</span>
        </Footer>
       <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addProductToCart(product)}>Add to card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard