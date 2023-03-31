import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  reducer  from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(thunk,logger));


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
  <BrowserRouter>
    <>
      <App />
      
    </>
  </BrowserRouter>
  </Provider>
);
