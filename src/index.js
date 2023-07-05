import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Placeholder data displayed on page load

const DATA = JSON.parse(localStorage.getItem('tasks'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
