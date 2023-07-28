import TodoItem from "../TodoItem/TodoItem"
import './TodoLists.css'

function TodoList({ todos, onChange, onDelete }) {
  return (
    <div className="todolist">
      {
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
               todo={todo}
              onChange={onChange}
              onDelete={onDelete}
            />
          )
        })
      }
    </div>
  )
}
export default TodoList