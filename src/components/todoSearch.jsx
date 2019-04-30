import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"

import {setSearchText,addTodo,toggleShowCompleted,toggleTodo} from "./../actions/actions"
class TodoSearch extends React.Component {

  render () {
    var {dispatch,showCompleted,searchText}=this.props

  return(
    <div>
      <div>
      <input type="search" ref="searchText" value={searchText} onChange={()=>{
          var searchText=this.refs.searchText.value;
          dispatch(setSearchText(searchText))
        }}>
      </input>
    </div>

      <div>
        <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
                dispatch(toggleShowCompleted())
              }}></input>
            Show completed Todos
      </label>

      </div>
    </div>
  )
  }
}

export default connect(
  (state)=>{
  return{
    showCompleted:state.showCompleted,
    searchText:state.searchText,
  }
})(TodoSearch);
