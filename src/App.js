import React, { Component } from 'react';

import './App.css';
import Main from"./components/main"

class App extends Component {
  render() {
    return (
      <div className="grid-x grid-padding-x align-center ">
        <div className="cell small-11 medium-6 large-5">
        <h1>Todo App</h1>
        <Main/>
        {this.props.children}
        </div>
      </div>

    )
  }
}

export default App;
