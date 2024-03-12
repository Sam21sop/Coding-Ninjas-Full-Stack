import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }


  handleAdd = (selectedTask) => {
    // complete the function to add a new Todo to the list
    const {todos} = this.state;
    todos.push({text:selectedTask})
    this.setState({
      todos
    });
  };

  handleRemove = (selectedTask) => {
    // complete the function to remove the Todo from the list
    const {todos} = this.state;
    const updatedTodos = todos.filter(todo => todo !== selectedTask);
    this.setState({
      todos:updatedTodos
    })
  };


  render() {
    let {todos} = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form todoListArray={todos} addTodoTask={this.handleAdd}/>
        <List todoListObject={todos} removeTask={this.handleRemove}/>
      </div>
    );
  }
}
