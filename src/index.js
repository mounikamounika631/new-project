import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
// import { First } from 'react-bootstrap/esm/PageItem';
// import First from '../src/usereducer/First';
import First from './errorboundry.js/First';
import First1 from '../src/usereducer/First1';
import Practice1 from './usememos/Practice1';
import LoginPage from './reactFianlcase/LoginPage';
import Login from './reactFianlcase/Login';

import Fetching from './mockquestion/Fetching';
import UseMemo1 from './usememos/UseMemo1';
import Practice2 from './usereducer/Practice2';
import store from './reactRedux/Store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>  redux code in index */}
     <App />
     {/* </Provider> */}
    {/* <Practice1 />
    <First />
    <First1 /> */} 
    {/* <LoginPage /> */}
    {/* <First /> */}

    {/* <First /> */}
    {/* <Practice1/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
