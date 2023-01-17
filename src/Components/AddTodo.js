import React,{useState} from 'react'


export default function AddTodo(props) {
   const [title, setTitle]=useState("");
   const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blanked");

        }
else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }}
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>

      <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title" class="form-label">Todo title</label>
    <input type="text" value={title} onChange={(e)=>(setTitle(e.target.value))} class="form-control" id="title"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Todo Description</label>
    <input type="text" value={desc}  onChange={(e)=>(setDesc(e.target.value))} class="form-control" id="desc"/>
  </div>
  
  <button type="submit" class="btn btn-success">Submit</button>
</form>
    </div>
  )
}
