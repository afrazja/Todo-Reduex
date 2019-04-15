import React from 'react'
import uuid from 'node-uuid'

import PropTypes from 'prop-types'
import Todolist from"./todolist"
import Addtodo from"./addtodo"
import TodoSearch from"./todoSearch"



class Main extends React.Component {
state={
  showCompleted:false,
  searchText:'',

  todos:[
    {id:uuid(),text:"wewe",completed:false},
  {id:uuid(),text:"fgfg",completed:true}
]
}
onToggle=(id)=>{
var updateTodo=this.state.todos.map((todo)=>{
  if (todo.id==id){
    todo.completed=!todo.completed
  }
  return todo
})
this.setState({todos:updateTodo})
}
onSearch=(showCompleted,searchText)=>{
this.setState({
  showCompleted:showCompleted,
  searchText:searchText.toLowerCase(),
})
}

addNew=(todoText)=>{


  this.setState({todos:[...this.state.todos,{text:todoText,id:uuid(),completed:false}]})

}



    render(){
        var  {todos}=this.state;
        return(
          <div>
              <TodoSearch onSearch={this.onSearch}/>
  <Todolist todos={todos} onToggle={this.onToggle}/>
  <Addtodo onAddTodo={this.addNew}/>

</div>
  )
  }
}

export default Main;
