import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Restore data from localStorage on page load

if (localStorage.getItem('storage') == null) {
  var DATA = [];
} else {
  DATA = JSON.parse(localStorage.getItem('storage'));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App tasks={DATA} />
    </React.StrictMode>
);
