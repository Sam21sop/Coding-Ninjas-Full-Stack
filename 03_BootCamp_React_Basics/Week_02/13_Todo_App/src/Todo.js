import { Component } from "react";

export class Todo extends Component {
  render() {
    const {todo, handleRemove} = this.props;
    return (
      <>
        {
          todo.map((task, index) => {
            return (
              <div  key={index} className="todo">
                <p>{task.text}</p>
                {/* Add the onClick event to handle removal of the todos */}
                <button onClick={()=>(handleRemove(task))}>x</button>
              </div>
            )
          })
        }
      </>
    );
  }
}
