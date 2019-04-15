import React from 'react'
import PropTypes from 'prop-types'

class Addtodo extends React.Component {
  state={
    newTodo:""
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    var todoText=this.refs.newText.value;
  if(todoText.length>0 ){
  this.refs.newText.value='';
  this.props.onAddTodo(todoText)
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

export default Addtodo;
