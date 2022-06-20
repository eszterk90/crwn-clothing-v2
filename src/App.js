
import categories from './components/categories/category-menu'
import Directory from './components/directory/directory-component'

const App = () => {


  return (
    <Directory categories={categories}/>
  );
};

export default App;
