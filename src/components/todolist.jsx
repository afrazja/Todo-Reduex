import Todo from "./todo"
import Addtodo from "./addtodo"
import {connect} from "react-redux"
import TodoAPI from"../api/todoAPI"
var React = require('react');
var PropTypes = require('prop-types');


 export class Todolist extends React.Component {
  render() {
    var {todos,showCompleted,searchText}=this.props;
    var showList=()=>{
    return TodoAPI.  filterTodos(todos,showCompleted,searchText).map((todo)=>{
        return(<Todo key={todo.id} {...todo} />)

    });
    }

    return (
      <div >

    {showList()}
      </div>
    );
  }

};
export default connect((state)=>{
  return{
    todos:state.todos,
    showCompleted:state.showCompleted,
    searchText:state.searchText,
  };
}
)(Todolist);
