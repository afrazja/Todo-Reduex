var React = require('react');
var PropTypes = require('prop-types');

export class Todo extends React.Component {

  render() {
    var{id,text,completed}=this.props;
    return (
      <div onClick={()=>{
          this.props.onToggle(id);
        }}>
      <input type="checkbox" checked={completed} />{text}
      </div>
    );
  }

};
export default Todo;