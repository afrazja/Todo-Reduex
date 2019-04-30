import React from 'react'
import uuid from 'node-uuid'
import moment from 'moment'
import PropTypes from 'prop-types'
import Todolist from"./todolist"
import Addtodo from "./addtodo"
import TodoSearch from"./todoSearch"


class Main extends React.Component {
     render(){
        

        return(
          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
          <div>
              <TodoSearch />
            <Todolist/>
            <Addtodo />
          </div>
         </div>
       </div>
  )
  }
}

export default Main;
