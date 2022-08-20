import React, {useContext, Fragment} from 'react'
import {CategoriesContext} from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/ProductCard'
import CategoryPreview from '../../components/category-preview/CategoryPreview'


function CategoriesPreview() {

    const {categoriesMap} = useContext(CategoriesContext);

  return (
    <Fragment>
    {Object.keys(categoriesMap).map(title => {
      const products = categoriesMap[title];
      return <CategoryPreview key={title} title={title} products={products}/>
    })}
    </Fragment>
  );
};

export default CategoriesPreview

