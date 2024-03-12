import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const {todoListObject, removeTask} = this.props;
    return (
      <div className="list">
        {/* Render the todo here from the props*/}
        <Todo todo={todoListObject} handleRemove={removeTask}/>
      </div>
    );
  }
}
