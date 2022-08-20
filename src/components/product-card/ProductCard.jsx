import React, {useContext} from 'react'
import {ProductCardContainer, Footer} from './product-card.styles'
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button'
// import {ProductsContext} from '../../contexts/products.context'
import {CartContext} from '../../contexts/cart-item.context'

function ProductCard({product}) {

const {addItemToCart} = useContext(CartContext);

const addProductToCart = () => addItemToCart(product)

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