import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
// import { First } from 'react-bootstrap/esm/PageItem';
import First from '../src/usereducer/First';
import First1 from '../src/usereducer/First1';
import Practice1 from './usereducer/Practice1';
import LoginPage from './reactFianlcase/LoginPage';
import Login from './reactFianlcase/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Practice1 />
    <First />
    <First1 /> */}
    <LoginPage />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
