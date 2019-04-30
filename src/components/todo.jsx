import {connect} from "react-redux"
import moment from 'moment'
import {setSearchText,addTodo,toggleShowCompleted,toggleTodo} from "./../actions/actions"
var React = require('react');
var PropTypes = require('prop-types');

export class Todo extends React.Component {

  render() {
    var{id,text,completed,createdAt,completedAt,dispatch}=this.props;
    var renderDate=()=>{
      var timesstamp1=createdAt;
      var timestamp2=completedAt
      if(timestamp2==undefined){
        return ("created at  "+moment.unix(timesstamp1).format('MMM Do YYYY @ h:mm a'))
}else{
  return ("created at  "+moment.unix(timesstamp1).format('MMM Do YYYY @ h:mm a')+
  "   and completed at   "+moment.unix(timestamp2).format('MMM Do YYYY @ h:mm a'))

}
    }
    return (
      <div onClick={()=>{
          console.log(id);
       dispatch(toggleTodo(id))
        }}>
      <input type="checkbox" checked={completed} />{text}<br/>{renderDate()}<br/>
      </div>
    );
  }

};
export default connect()(Todo);
