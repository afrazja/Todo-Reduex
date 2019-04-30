import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"

import {setSearchText,addTodo,toggleShowCompleted,toggleTodo} from "./../actions/actions"

class Addtodo extends React.Component {

  handleSubmit=(e)=>{
    e.preventDefault();
    var {dispatch}=this.props;

    var todoText=this.refs.newText.value;
  if(todoText.length>0 ){
  this.refs.newText.value='';
  dispatch(addTodo(todoText))
  }else{
this.refs.newText.focus();
  }
    this.setState({newtodo:''});
  }
  render () {

return(
  <div>
  <form onSubmit={this.handleSubmit}>
<input type="text" ref="newText" placeholder="Add New"></input><br/>
<button className="button expanded">Add</button>
  </form>
</div>
)
  }
}

export default connect()(Addtodo);
