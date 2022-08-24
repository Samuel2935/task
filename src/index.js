import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import axios from 'axios';
import { store } from './store';

axios.defaults.baseURL = "https://stage.api.sloovi.com";

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  
);


