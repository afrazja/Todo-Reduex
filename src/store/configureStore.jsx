import { createStore,combineReducers,compose } from 'redux'
import {searchTextReducer,showCompletedReducer,todoReducer,toggleTodoReducer} from "./../reducers/reducers"


 var configure=()=>{

}
var reducer=combineReducers({
  searchText:searchTextReducer,
  showCompleted:showCompletedReducer,
  todos:todoReducer,
  
})
export  var store=createStore(reducer,compose(
 window.devToolsExtension?window.devToolsExtension():f=>f
))
export default store;
