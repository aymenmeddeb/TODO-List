import React from 'react'
import {ListGroup,Button,CloseButton} from 'react-bootstrap/'
import {useSelector,useDispatch } from "react-redux"
import "../App.css"
import {DeleteTask, IsDone} from "../js/Action"
import Edit from "../components/Edit"



function Task({el}) {
    const description = useSelector(state => state.todo)
    const status = useSelector(state => state.todo)
    
    const dispatch=useDispatch();
    const handleclick=(e)=>{
        e.preventDefault();
        dispatch(DeleteTask(el.id))
    }
    const handledone=(e)=>{
        e.preventDefault();
        dispatch(IsDone(el.id))
    }
    return (
     <div className="div">
     <div className={el.isdone? "done":"div2"}><ListGroup.Item variant="primary">{el.description}</ListGroup.Item></div>
     <div><Button className="div3" onClick={handledone} variant="info"><h6>{el.isdone ? "NotDone":"Done"}</h6></Button></div>
     <Button className="div4" onClick={handleclick} ><CloseButton aria-label="heavy" /></Button>
     <Edit task={el} />
     </div>
      
        
        
    )
}

export default Task
