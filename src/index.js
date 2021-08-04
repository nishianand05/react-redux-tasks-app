import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import {Provider} from 'react-redux'; //To connect react and redux
import {BrowserRouter} from "react-router-dom";
import thunk from 'redux-thunk'; //Write action creators which return functions instead of actions. Delays dispatch of action.

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
		<BrowserRouter><App /></BrowserRouter>
	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
