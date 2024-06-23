import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import {Provider} from 'react-redux';


import './index.css';
import App from './App';

import store from './redux/store';


const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
      
    </Provider>
  </React.StrictMode>
);
