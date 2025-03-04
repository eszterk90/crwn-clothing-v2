import React, {useState, useEffect, Fragment} from 'react'
import {CategoryContainer, CategoryTitle} from './category.styles'
import {useParams} from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import {useSelector} from 'react-redux'
import {selectCategoriesMap} from '../../store/categories/category.selector'

function Category() {

    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

   

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
  return (
    <Fragment>  
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
      {
        products && products.map((product) => <ProductCard key={product.id} product={product}/>)
      }
    </CategoryContainer>
    </Fragment>
    
  )
}

export default Category