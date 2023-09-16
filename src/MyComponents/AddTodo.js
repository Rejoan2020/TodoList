import React, { useState } from 'react'

const AddTodo = (props) => {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  let submit = (e)=>{
    e.preventDefault();
    if(!title || !desc)alert("title or description is missing !");
    else{
      props.addTodo(title,desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className='container'>
        <h3>Add todo</h3>
        <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo title</label>
            <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="title"/>
        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" value = {desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}}id="text"/>
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">Add todo</button>
        </form>
    </div>
  )
}

export default AddTodo
