import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gundamfunction from './Gundamfunction';
import reportWebVitals from './reportWebVitals';
import Archangelfunction from './Archangelfunction';
import Headercomps from './Headercomps';
import Carfunction from './Carfunction'
import Gundam from './Gundam';
import Containerfunctions from './Containerfunctions';
import Headercomp from './Headercomp';
import Football from './Football';
import Goal from './Goal'
import Fate from './Fate';
import Archangelii from './Archangelii';
import Goalclass from './Goalclass';
import GoalclassCopy from './GoalclassCopy';
import Archangellistclass from './Archangellistclass';
import Fateclass from './Fateclass'
import Footballclass from './Footballclass';

const characters = ['Siro', 'Saber', 'Archer', 'Tosaka Lyn'];


ReactDOM.render(
  <React.StrictMode>
    <Footballclass />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
