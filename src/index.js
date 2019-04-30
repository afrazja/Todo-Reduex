import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoAPI from"./api/todoAPI"

import * as serviceWorker from './serviceWorker';
import 'foundation-sites/dist/css/foundation.min.css'
import {setSearchText,addTodo,toggleShowCompleted,toggleTodo,addTodos} from "./actions/actions"
import store from "./store/configureStore"
import {Provider} from "react-redux"


const unsubscribe = store.subscribe(() =>{
  var state=store.getState();
  console.log("new",state);
  TodoAPI.setTodos(state.todos)
});
var initialTodos=TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
