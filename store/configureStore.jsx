import redux from "redux"
import {searchTextReducer,showCompletedReducer,todoReducer,toggleTodoReducer} from "./reducers/reducers"


export var configure=()=>{
 var reducer=redux.combineReducers({
   searchText=searchTextReducer,
   showcompleted=showCompletedReducer,
   todos=todoReducer,
   toggleTodo=toggleTodoReducer,
 })
var store=redux.createStore(reducer,redux.compose(
  window.devToolsExtension?window.devToolsExtension():f=>f
))
}
