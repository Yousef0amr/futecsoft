import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './../src/localization/config.js'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { Provider } from 'react-redux';
import store from './app/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <ThemeProvider >
        <Provider store={store}>
          <App />
        </Provider>

      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

