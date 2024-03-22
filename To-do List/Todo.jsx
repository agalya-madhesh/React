import { useState } from 'react'
import './CSS/Todo.css'

const Todo = () => {

  const [todos,setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {

    }

  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className='todo-add'>
      <input ref={inputRef} type="text" placeholder='Add task' className='todo-input'/>
      <div onClick={()=>{add} }className='todo-add-btn'>ADD</div>
      </div>
        <div className='todo-list'></div>
    </div>
  )
}

export default Todo