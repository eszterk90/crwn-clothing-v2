import {Fragment} from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import {selectCategoriesMap} from '../../store/categories/category.selector.js'
import {useSelector} from 'react-redux';



function CategoriesPreview() {

  const categoriesMap = useSelector(selectCategoriesMap)

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

