// import React, {useState, useEffect} from 'react';
// //import SHOP_DATA from '../shop-data.js'
// import {addCollectionAndDocuments, getCategoriesAndDocuments} from '../utils/firebase/firebase.utils'

// export const CategoriesContext = React.createContext({
//     categoriesMap: {},
//     // setProducts: () => null
// }
    
// );

// export const CategoriesProvider = ({children}) => {
// const [categoriesMap, setCategoriesMap] = useState({});

// // useEffect(() => {
// //     addCollectionAndDocuments('categories', SHOP_DATA)
// // }, [])

// useEffect(() => {
//     const getCategoriesMap = async () => {
//         const categoryMap = await getCategoriesAndDocuments();
//         setCategoriesMap(categoryMap);
//     }
//     getCategoriesMap()
    
// }, [])


// const value = {categoriesMap};
   
//     return (
//         <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
//     )
// }

