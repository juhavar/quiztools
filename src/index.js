import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../client/App'
import AppJSONserver from './AppJSONserver'
import AppLocalStorage from './AppLocalStorage';
import LocalStorageChartDemo from './LocalStorageChartDemo'
/*import AdminLocalStorage from './AdminLocalStorage'; */

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
