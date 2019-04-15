import Todo from "./todo"
import Addtodo from "./addtodo"

var React = require('react');
var PropTypes = require('prop-types');

 export class Todolist extends React.Component {
  render() {
    var {todos,onToggle}=this.props;
    var showList=()=>{
    return todos.map((todo)=>{
        return(<Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} onToggle={onToggle} />)

    });
    }

    return (
      <div >

    {showList()}
      </div>
    );
  }

};
export default Todolist;
