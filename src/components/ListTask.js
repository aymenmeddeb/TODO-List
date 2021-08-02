import React,{useState} from 'react'
import Task from './Task'
import {connect,useSelector } from "react-redux"
import "../App.css"
import AddTask from './CreateTask';
import {Button} from "react-bootstrap"

function ListTask() {
    const [all, setAll] = useState(true)
  
    const item = useSelector(state => state.todo);
    return (
        <div>
        <br/>
        <AddTask/>
        <hr/>
        <div className="div5"><Button onClick={()=>setAll(!all)}>{all? "Done": "All"}</Button></div>
        
        <hr/>
        
       {all? (item.map((el,id) =>
            <Task el={el} key={el.id} /> ))
        : 
        (item.map((el,id) =>el.isdone?
        (<Task el={el} key={el.id} /> ):null))
    }

            </div>     
        
    )
}

export default connect()(ListTask)
