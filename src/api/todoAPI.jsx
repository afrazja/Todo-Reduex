import $ from "jquery"
export default{
  setTodos(todos){
if ($.isArray(todos)){
  localStorage.setItem('todos',JSON.stringify(todos))
  return todos;
}
  },
  getTodos(){
var stingTodos=localStorage.getItem('todos');
var todos=[];
try{
  todos=JSON.parse(stingTodos)
}catch(e){

}
if($.isArray(todos)){
  return todos;
}else{
  return [];
}
},
  filterTodos(todos,showCompleted,searchText){
    var filterTodos=todos;

    filterTodos=filterTodos.filter((todo)=>{
        return !todo.completed || showCompleted;
          })
        filterTodos=filterTodos.filter((todo)=>{
           if (searchText.length>0){
             var todoa=todo.text.toLowerCase();
             if (todoa.indexOf(searchText)>-1){
               return todo
             }
           }else{
             return todo
           }

        })
    filterTodos.sort((a,b)=>{
      if(!a.completed&&b.completed){
        return -1
      }
      if(a.completed&&!b.completed){
        return 1
      }
    else{return 0}




    })
    return filterTodos
  }
}
