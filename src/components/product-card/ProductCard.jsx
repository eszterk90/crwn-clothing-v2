import React, {useContext} from 'react'
import './product-card.styles.scss'
import Button from '../button/Button'
import {ProductsContext} from '../../contexts/products.context'

function ProductCard({product}) {


  return (
    <div className='product-card-container'>
        <img src={product.imageUrl} alt='product'/>
        <div className='footer'>
            <span className='name'>{product.name}</span>
            <span className='price'>{product.price}</span>
        </div>
       <Button buttonType='inverted'>Add to card</Button>
    </div>
  )
}

export default ProductCard