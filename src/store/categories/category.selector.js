import {createSelector} from 'reselect'; // created a memoized selector that takes two arguments: 1: array of input selectors, 2: output selector

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const {title, items} = category;
        //see hashtables:
        //let myData = new Object();
        //myData["The Beatles"] ="248.3";

        // When you add data to a hashtable, you specify both a key and a value to go with it:
        //myData["Pink Floyd"] ="110.1"

        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);