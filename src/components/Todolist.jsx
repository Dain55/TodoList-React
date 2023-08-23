import React from 'react'
import CreateTask from './createTask'
import { useState, useEffect } from 'react';
import Todo from './todo';





export const Todolist = () => {

    const [taskList,setTaskList] = useState([])

    useEffect(()=> {
        let arr = localStorage.getItem('taskList')
       
        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()

    }
            
    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
       }
       const updateListArray = (obj,index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
       }

  return (
    <>
          <h1 className="text-center font-bold text-2xl">
          Добавление, изменение и удаление элемента из таблицы
        </h1>
        <center className='mt-5'>

        </center>
        <CreateTask save = {saveTask}/>
        <div className='table'>
        <div>
            Имя
        </div>
        <div>
            Возраст
        </div>
        <div>
            Действия
        </div>
       </div>
       <hr></hr>
       <div>
          {taskList && taskList.map((obj,index)=> 
           <Todo taskObj = {obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>
              
          )}
       </div>
      
    </>
  )
}
