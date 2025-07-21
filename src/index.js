import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import App from './App.js';
import store from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

import { globalStyles } from './styels/theme.js';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
   <Provider store={store}>
    <Global styles={globalStyles} />
    <React.StrictMode>

    <App />
    </React.StrictMode>
  </Provider>
  </BrowserRouter>
 
);
