
import React, { useState, useEffect  } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTodo = ({modal,toggle,updateTask,taskObj}) => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
  
    const handleChange = (e) => {
      
      const {name,value} = e.target
      if (name === "name") {
        setName(value)
      }else{
        setAge(value)
      }
    }
 useEffect(() => {
     setName(taskObj.name)
     setAge(taskObj.age)
 },[])


const handleEdit = (e) => {
  e.preventDefault()
  let tempObj = {}
  tempObj["Name"] = name
  tempObj["Age"] = age
  updateTask(tempObj)
}
  
    return (
      <div>
     
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Изменение</ModalHeader>
          <ModalBody>
            <div className='TodoForm'>

          
           <div>
           <p>Имя</p>
              <input name='name' type="text"  onChange={handleChange} value={name} />
           </div>
      
           <div>
           <p>Возраст</p>
              <input name='age' type="text"  onChange={handleChange} value={age}/>
           </div>
           </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleEdit}>
              Изменить
            </Button>{' '}
            <Button color="secondary" onClick={toggle} >
              Отменна
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default EditTodo;