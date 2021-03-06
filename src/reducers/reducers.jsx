import uuid from 'node-uuid'
import moment from 'moment'
export var searchTextReducer=(state="",action)=>{
  switch(action.type){
  case "SET_SEARCH_TEXT":
  return action.searchText;
  default:
  return state;
}
};
export var showCompletedReducer=(state=false,action)=>{
  switch(action.type){
  case "TOGGLE_SHOW_COMPLETED":
  return !state;
  default:
  return state;
}
};
export var todoReducer=(state=[],action)=>{
  switch(action.type){
    case 'ADD_TODO':
        return [
          ...state,
          {
            id: uuid(),
            text: action.text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ];
    case 'ADD_TODOS':

    return[
      ...state,...action.todos
    ];
  

  case "TOGGLE_TODO":
  console.log(state[0].id)

  return state.map((todo) => {

      if (todo.id === action.id) {
        console.log(action.id)
        var nextCompleted = !todo.completed;


        return {
          ...todo,
          completed: nextCompleted,
          completedAt: nextCompleted ? moment().unix() : undefined
        };
      }else{
        return todo;
      }
    });
  default:
    return state;
}
};
