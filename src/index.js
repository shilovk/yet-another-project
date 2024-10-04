import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/reducers";
import { compose, createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

const preloadedState = {
  todos: [],
};

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const store = createStore(rootReducer, preloadedState, enhancer);

const store = configureStore({
  reducer: rootReducer, // Корректный ключ reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: (defaultEnhancers) => [], // Если нет дополнительных enhancers
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();