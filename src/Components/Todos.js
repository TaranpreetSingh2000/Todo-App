import React from 'react'
import TodoItem from '../Components/TodoItem'

const Todos = (props) => {
  return (
    <div className='container my-3'>
     <h3 className='my-4'>Todos List</h3>
     {props.todos.length===0 ? " No todos to display" :
   props.todos.map((todo)=>{
    console.log(todo.sno);
     return(  
      <TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>
     )
   })}
    </div>
  )
}

export default Todos
