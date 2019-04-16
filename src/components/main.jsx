import React from 'react'
import uuid from 'node-uuid'

import PropTypes from 'prop-types'
import Todolist from"./todolist"
import Addtodo from"./addtodo"
import TodoSearch from"./todoSearch"
import TodoAPI from"../api/todoAPI"


class Main extends React.Component {
state={
  showCompleted:false,
  searchText:'',

  todos:TodoAPI.getTodos()
}
componentDidUpdate=()=>{
  TodoAPI.setTodos(this.state.todos)
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
        var  {todos,showCompleted,searchText}=this.state;
        var filterTodos=TodoAPI.filterTodos(todos,showCompleted,searchText)
        return(
          <div>
              <TodoSearch onSearch={this.onSearch}/>
  <Todolist todos={filterTodos} onToggle={this.onToggle}/>
  <Addtodo onAddTodo={this.addNew}/>

</div>
  )
  }
}

export default Main;
