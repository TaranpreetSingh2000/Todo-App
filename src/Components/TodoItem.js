import React from 'react'


const TodoItem = ({todo,onDelete}) => {  // destructuring if I wil not write props
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}> Delete</button> {/** pass the function */}
    </div>
    <hr />
    </>
  )
}

export default TodoItem
 