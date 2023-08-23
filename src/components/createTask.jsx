import React, { useState } from 'react'

const CreateTask = ({save}) => {
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
 const handleSave = ()=> {
  let taskObj = {}
  taskObj["Name"] = name
  taskObj["Age"] = age
  save(taskObj)
 
}

  return (
    <>
    
         <form>
             <div className='TodoForm'>
              <div>
                <p>Имя</p>
                <input name='name' placeholder='Diyor Maxmudov'   type="text"  onChange={handleChange} value={name}/>
              </div>
              <div>
                <p>Возраст</p>
                <input name='age'  placeholder='17' type="text"  onChange={handleChange}value={age} />
              </div>
              <button className='bg-[#0554ff] text-white h-[40px] w-[100px] mt-[45px] rounded-md'  onClick={handleSave}>
            Добавить
           </button>
            </div>
            
         </form>

    </>
  )
}
export default CreateTask