import './TodoFooter.css'

function TodoFooter({ todos, onClearCompleted }) {
  const completedSize = todos.filter((todo) => todo.isCompleted).length
  return (
    <div className='footer'>
      <span>{completedSize}/{todos.length}completed</span>
      <button onClick={onClearCompleted}>clear completed</button>
    </div>
  )
}
export default TodoFooter