import React from "react";
import "./App.css"

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      value: "",
      isHidden:false
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value: value });
  };

  handleClick = () => {
    const todo = {
      value: this.state.value,
      isInEditMode: false,
      isHidden: false,
      isDone: false
    };

    this.setState({
      todos: [...this.state.todos, todo],
      value: ""
    });

    // this.setState((prevState) => {
    //   return {
    //     todos: [...prevState.todos, prevState.value],
    //     value: ''
    //   };
    // });
  };

  handleIsDoneChange = (event) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.value === event.target.id) {
            return {
              ...todo,
              isDone: event.target.checked
            };
          }
          return todo;
        })
      };
    });
  };

  handleDeleteClick = (todoValue) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((item) => item.value !== todoValue)
      };
    });
  };

  handleEditButton = (todoValue) => {

  }

  handleHideToDo = (todoValue) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.value === todoValue) {
            return {
              ...todo,
              isHidden: !todo.isHidden
              
            }
          }
          return todo;
        })
      }
    })

  }

  render() {
    const { value, todos } = this.state;
    return (
      <div>
        <input value={value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        <div>
          {todos.map((todo, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={todo.value}
                checked={todo.isDone}
                onChange={this.handleIsDoneChange}
              />
              <span className={todo.isHidden ? 'blur' : ""}>{todo.value}</span>
              <button>Edit</button>
              <button onClick={() => this.handleHideToDo(todo.value)}>
              {todo.isHidden ? "Unhide" : "Hide"}
              </button>
              <button onClick={() => this.handleDeleteClick(todo.value)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}