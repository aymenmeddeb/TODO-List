import React from 'react'
import {useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {CreateTask} from '../js/Action'
import {Button} from 'react-bootstrap/'


function AddTask() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const addtext= useSelector(state => state.todo);
    
    const handleClick=(e)=>{ 
    e.preventDefault();
    dispatch(CreateTask({id:Math.random(),
       description:text,
      isdone: false,}))
      setText("");
  }
    
    return (
        <form className="input1" onSubmit={handleClick} >
  
          <input  className="input" type="submit" type="text" value={text}  onChange={(e)=>setText(e.target.value)}/> 
          <Button variant="line-info" onClick={handleClick}   ><h4 >+</h4></Button> 
          
        </form>
    )
}

export default AddTask
