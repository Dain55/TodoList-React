import React, { useState } from 'react'
import {AiTwotoneDelete} from "react-icons/ai"
import {BiSolidEdit} from "react-icons/bi"
import EditTodo from "../components/editTask"

const Todo = ({taskObj, index, deleteTask,updateListArray}) => {
  const [modal, setModal] = useState(false);
  
const toggle = () => {
  setModal(!modal)
}

  const handleDelete = () => {
    deleteTask(index)
  }
  const updateTask = (obj) => {
     updateListArray(obj,index)

  }

  return (
    <>
     <div className='table'>
        <div>
        <p>{taskObj.Name}</p>
        </div>
        <div>
        <p>{taskObj.Age}</p>
        </div>
        <div className='flex'>
           <BiSolidEdit onClick={() => setModal(true)} size={30}/>
           <AiTwotoneDelete onClick={handleDelete} size={30}/> 
        </div>
       </div>
       <hr></hr>
     <EditTodo modal = {modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
 
    </>
  )
}
export default Todo