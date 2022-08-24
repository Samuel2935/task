import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import axios from 'axios';
import { store } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';

axios.defaults.baseURL = "https://stage.api.sloovi.com";
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


