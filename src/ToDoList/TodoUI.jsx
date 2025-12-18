import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, deletetodo } from './TodoSlicer';

const TodoUI = () => {
    const [newValue,setNewvalue]=useState("");
    const updatedTodovalues=useSelector(state=>state.todoReducer.todoitem)
    const dispatch=useDispatch();

    const handelSubmit=(e)=>{
        e.preventDefault();
        if(newValue==""){
            alert("add item");
            return;
        }
        dispatch(addtodo(newValue));
        setNewvalue("");
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" className='border-2 border-black border-solid' value={newValue} onChange={(e)=>setNewvalue(e.target.value)}/>
            <button>Add Item</button>
        </form>
        
        <ul>
            {
                updatedTodovalues.map((item)=>{
                   return(
                         <li key={item.id}>
                            {item.text}
                            <button onClick={()=>dispatch(deletetodo(item.id))}>Delete</button>
                        </li>
                   )
                })
            }
        </ul>
        
    </div>
  )
}

export default TodoUI