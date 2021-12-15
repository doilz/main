import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gundams from './Gundams';
import reportWebVitals from './reportWebVitals';
import Archangel from './Archangel';
import Headercomps from './Headercomps';
import Container from './Container';
import Carfunction from './Carfunction'
import Gundam from './Gundam';



ReactDOM.render(
  <React.StrictMode>
    <Headercomps/>
  </React.StrictMode>,
  document.getElementById('header')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
