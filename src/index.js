import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import {store} from './store/store';


import App from './App';
import {UserProvider} from './contexts/user.context'
import {CategoriesProvider} from './contexts/categories.context'
import {CartContextProvider} from './contexts/cart-item.context'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
