import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './../src/localization/config.js'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { Provider } from 'react-redux';
import store from './app/store.js';
import AuthProvider from './utils/auth.js';
import { CookiesProvider } from 'react-cookie';
import { ErrorBoundary } from 'react-error-boundary';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
      <BrowserRouter >
        <ThemeProvider >
          <Provider store={store}>
            <CookiesProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </CookiesProvider>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

