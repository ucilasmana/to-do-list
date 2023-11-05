import React, { useContext, useState } from 'react'
import { TodoContext } from '../App'
import TodayList from './Lists/TodayList'
import UpcomingLists from './Lists/UpcomingLists'
import {NoPlan, Edit, Delete} from '../asset/svg'


const Todo = () => {
  console.log("TODO")
  const {modalDispatch} = useContext(TodoContext);
 
  function handleEditModal(taskID){
    modalDispatch({
      type:'openModal',
      id:taskID,
      modalType:'Edit'
    })

  }

  function handleDeleteModal(taskID){
    modalDispatch({
      type:'openModal',
      id:taskID,
      modalType:'Delete'
    })
  }

  return (
    <>
    <div className="flex flex-col lg:flex-row justify-center items-center lg:overflow-hidden lg:max-h-screen">
       <div className="lg:absolute lg:top-0 lg:right-0 h-full overflow-auto w-full lg:w-1/2 ">
          <div className='flex flex-col gap-10 justify-center pt-12 pb-6'>    
          <TodayList NoPlan={NoPlan} Edit={Edit} Delete={Delete} editModal={handleEditModal} deleteModal={handleDeleteModal}/>  
          <UpcomingLists  NoPlan={NoPlan} Edit={Edit} Delete={Delete} editModal={handleEditModal} deleteModal={handleDeleteModal}/>          
          </div>
        </div>
    </div>      
    </>
  )
}

export default Todo