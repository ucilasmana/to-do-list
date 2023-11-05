import React, { useContext, useState } from 'react'
import { TodoContext } from '../../App'
import Form from './Form'
import { Close } from '../../asset/svg'

const Modal = () => {
  console.log("MODAL")
  const {modal, modalDispatch, taskDispatch} = useContext(TodoContext)

  function closeModal(){
    modalDispatch({
      type:'closeModal',
    })
  }

  function handleDeleteTask(){
    taskDispatch({
      type:'deleted',
      id:modal.selectedId
    })
    modalDispatch({
      type:'closeModal',
    })
  }
 
  return (
    <>
    <div className='fixed top-0 bg-orange-900/70 w-full h-full'>
      <div className="flex justify-center items-center h-full w-full">
      <div className='relative bg-orange-100 w-3/4 p-8 rounded-xl shadow-xl'>
        <div onClick={()=>closeModal()} className="absolute cursor-pointer right-2 top-2">
          <Close className="h-7 w-7 fill-red-600 hover:fill-red-700"/>
        </div>
        <h3 className='font-semibold text-red-600 font-borel text-xl sm:text-2xl'> {modal.modalType} the Plan</h3>
        {modal.modalType==='Edit'? <Form/> :
        <div className='text-center'>
          <h3 className='mt-4 mb-8 text-red-700 font-rem text-xl sm:text-2xl'>Are you sure you want to delete this plan?</h3>
          <button onClick={()=>handleDeleteTask()} className='text-red-600 px-4 py-2 border border-red-400 bg-gray-100 hover:bg-red-700 hover:text-white rounded-lg shadow-md text-xs min-[360px]:text-sm sm:text-base font-rem'>Confirm Deletion</button>
        </div>
        }
      </div>
      </div>
     
    </div>
 
    </>

  )
}

export default Modal