import React, { useState } from "react";
import "./App.css"
import TodoList from "./TodoList/TodoLists";
import TodoForm from './TodoForm/TodoForm'
import TodoFooter from './TodoFooter/TodoFooter'

export default function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn JS',
      isCompleted: false
    },

    {
      id: Math.random(),
      text: 'Learn css',
      isCompleted: false
    },

    {
      id: Math.random(),
      text: 'Learn React',
      isCompleted: false
    },
  ])

  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        if(text){
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            }
  
          ])
        }else(alert('empty value'))
        
      }} />
      <TodoList
        todos={todos}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }))
        }}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
      }} />
    </div>
  );
}