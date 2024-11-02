// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css'; // Import main.css for global styling

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
