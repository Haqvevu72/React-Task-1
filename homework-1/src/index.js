import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProfile from './UserProfile';
import Product from './Product'
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* // Task 1 */}

      {/* <UserProfile username="Elgun" email="Elgun.H@gmail.com" avatar={require('./profile.png')}></UserProfile> */}


    {/* // Task 2 */}

      {/* <Product name="Steak" cost="20$" image={require ('./meal.png')}></Product> */}
      


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
