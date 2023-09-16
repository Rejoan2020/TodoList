import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let mystyle = {
    minHeight: "60vh",
    margin: '40px auto'
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='my-3'>Todos list !</h3>
      {props.items.length===0?"No items to display":
        props.items.map((item)=>{
            return <TodoItem todo={item} key = {item.sn} onDelete = {props.onDelete}/>
          }
        )
      }
    </div>
  )
}

export default Todos
