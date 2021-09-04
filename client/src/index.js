import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import reducers  from './reducers'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from "redux-thunk"
import App from "./App";
import './index.css'



const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById("root"));




