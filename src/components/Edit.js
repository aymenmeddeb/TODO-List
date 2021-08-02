import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {editTask} from "../js/Action"


const Edit=({task})=> {
    const [show, setShow] = useState(false);
    const [updtask,setUpdTask]=useState(task.description)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
   const handlchange=(e)=>{
    setUpdTask(e.target.value)
   } 
  const handledit=(e)=>{
    e.preventDefault();
      dispatch(editTask({id:task.id,description:updtask}))
      setShow(false)
  }
    return (
      <>
        <Button  className="div4" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><input value={updtask} onChange={handlchange}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handledit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


export default Edit
