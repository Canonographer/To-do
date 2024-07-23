import React from 'react'
import { Button } from 'bootstrap'
import './AddTodo.css'
// import './App.css'
import { getAllTasks,addNewTask } from '../Server/allApi'
import TodoList from './TodoList'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'


function AddTodo() {
  const [resChange,setresChange]=useState()
  const [todo ,setTodo]=useState([])

  const getTasks =async ()=>{
    const res = await getAllTasks()
    // console.log(res);
    setTodo(res.data)
    
  }
  const[newtask ,setNewtask]=useState({
    title:'',completed:false
  })
  // console.log(newtask);
  const addTask=async()=>{
    const {title}=newtask    
    if(!title){
      toast.error('enter some data')
    }
    else{
      const res=await addNewTask(newtask)

      if (res.status===201){
      
        setNewtask({ title:"",completed:false})
        toast.success('Category Added Successfully')
        getTasks()
        }
    else
        {
          toast.error('Category not Added Successfully')
        console.log(res);
    }
      
    }
    
    
    
    
    

  }

  useEffect(()=>{
    getTasks()
  },[resChange])

  // console.log(todo);

  return (
    <>
      <div className="add-todo-form d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input
          type="text"
          id="form3"
          className="form-control form-control-lg"
          placeholder='What do you need to do today?'
          onChange={(e)=>{setNewtask({...newtask,title:e.target.value})}}
        />
        
      </div>
      <button
        
        className="btn btn-primary btn-lg ms-2"
        onClick={addTask}
      >
        Add
      </button>
    </div>
    <TodoList data={todo} setresChange={setresChange} />
    </>
  )
}

export default AddTodo
