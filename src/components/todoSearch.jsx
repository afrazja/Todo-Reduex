import React from 'react'
import PropTypes from 'prop-types'

class TodoSearch extends React.Component {
  handleSearch=()=>{
    var showCompleted=this.refs.showCompleted.checked;
    var searchText=this.refs.searchText.value;
    this.props.onSearch(showCompleted,searchText)
  }
  render () {
  return(
    <div>
      <div>
      <input type="search" ref="searchText" onChange={this.handleSearch}>
      </input>
    </div>

      <div>
        <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}></input>
            Show completed Todos
      </label>

      </div>
    </div>
  )
  }
}

export default TodoSearch;
