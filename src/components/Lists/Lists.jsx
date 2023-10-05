import React from 'react'
import './Lists.css'
import Modal from '../Actions/Modal'
import {Edit, Delete} from '../../assets/svg'

const Lists = () => {

  const Modal = () =>{
    return <p>uhuhuhuh</p>
  }

  return (
    <>
     <div className="w-full flex flex-col justify-center items-center gap-7">
        <h3 className="font-borel text-xl md:text-2xl font-semibold">Today</h3>
        <div className="bg-white/90 min-h-24 md:w-5/6 p-5 rounded-md shadow-sm">  
        <div className="flex flex-col">
          <div className='relative flex group/actions border-b border-red-200 items-center'>
          <label className='relative pl-8 py-4 w-5/6'> Complete the UI
              <input type="checkbox" className="appearance-none" value=""/>
              <span className="checkmark absolute top-5 left-1 w-4 h-4 bg-orange-100/75 ring-1 shadow-sm rounded-sm outline-none ring-red-400 checked:bg-red-500"></span>
            </label>
            <div className='flex flex-col absolute right-0 bottom-2 p-0.5 invisible gap-0.5 bg-orange-100 rounded-md group-hover/actions:visible'>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Edit width="18" height="18" color="#db3828"/>
                </div>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Delete width="18" height="18" color="#db3828"/>
                </div>
            </div>
          </div>
          <div className='relative flex group/actions border-b border-red-200 items-center'>
          <label className='relative pl-8 py-4 w-5/6'>Apply the useReducer Hook 
              <input type="checkbox" className="appearance-none" value=""/>
              <span className="checkmark absolute top-5 left-1 w-4 h-4 bg-orange-100/75 ring-1 shadow-sm rounded-sm outline-none ring-red-400 checked:bg-red-500"></span>
            </label>
            <div className='flex flex-col absolute right-0 bottom-2 p-0.5 invisible gap-0.5 bg-orange-100 rounded-md group-hover/actions:visible'>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Edit width="18" height="18" color="#db3828"/>
                </div>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Delete width="18" height="18" color="#db3828"/>
                </div>
            </div>
          </div>
          <div className='relative flex group/actions border-b border-red-200 items-center'>
          <label className='relative pl-8 py-4 w-5/6'>Apply the useContext Hook 
              <input type="checkbox" className="appearance-none" value=""/>
              <span className="checkmark absolute top-5 left-1 w-4 h-4 bg-orange-100/75 ring-1 shadow-sm rounded-sm outline-none ring-red-400 checked:bg-red-500"></span>
            </label>
            <div className='flex flex-col absolute right-0 bottom-2 p-0.5 invisible gap-0.5 bg-orange-100 rounded-md group-hover/actions:visible'>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Edit width="18" height="18" color="#db3828"/>
                </div>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Delete width="18" height="18" color="#db3828"/>
                </div>
            </div>
          </div>
          <div className='relative flex group/actions border-b border-red-200 items-center'>
          <label className='relative pl-8 py-4 w-5/6'> Write the To-Do-List article on Medium 
              <input type="checkbox" className="appearance-none" value=""/>
              <span className="checkmark absolute top-5 left-1 w-4 h-4 bg-orange-100/75 ring-1 shadow-sm rounded-sm outline-none ring-red-400 checked:bg-red-500"></span>
            </label>
            <div className='flex flex-col absolute right-0 bottom-2 p-0.5 invisible gap-0.5 bg-orange-100 rounded-md group-hover/actions:visible'>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Edit width="18" height="18" color="#db3828"/>
                </div>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Delete width="18" height="18" color="#db3828"/>
                </div>
            </div>
          </div>
       
        </div> 
        <div className='flex flex-col sm:flex-row gap-2 justify-between items-center py-2 text-xs sm:text-sm'>
          <div className='sm:w-4/5 sm:break-words sm:px-2 sm:first:px-0'>
            <label className='line-through text-gray-400 text-sm'>Complete the Tic-Tac-Toe App</label>
            <label className='pl-2 line-through text-gray-400 text-sm'>Write the Tic-Tac-Toe Article on Medium</label>
          </div>
          <div className='flex sm:flex-col gap-2 sm:gap-0 items-center sm:w-1/5'>
            <h3 className='font-rem text-3xl'>2</h3>
            <span className='text-xs font-semibold sm:font-medium'>Completed</span>
          </div>
            </div>
      </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-7">
        <h3 className="font-borel text-xl md:text-2xl font-semibold">Upcoming</h3>
        <div className="bg-white/90 min-h-24 md:w-5/6 p-5 rounded-md w-full shadow-sm">  
        <div className="flex flex-col divide-y divide-red-200">
          <div className='relative flex group/actions items-center py-2'>
            <span className='text-xs font-semibold text-gray-400'>30/<br/>09/23</span>
            <label className='relative pl-4 w-5/6'>Complete the FindMovies App UI
            </label>
            <div className='flex flex-col absolute right-0 bottom-1 p-0.5 invisible gap-0.5 bg-orange-100 rounded-md group-hover/actions:visible'>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Edit width="18" height="18" color="#db3828"/>
                </div>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Delete width="18" height="18" color="#db3828"/>
                </div>
            </div>
          </div>
          <div className='relative flex group/actions items-center py-2'>
            <span className='text-xs font-semibold text-gray-400'>01/<br/>10/23</span>
            <label className='relative pl-4 w-5/6'>Write the FindMovies article on Medium
            </label>
            <div className='flex flex-col absolute right-0 bottom-1 p-0.5 invisible gap-0.5 bg-orange-100 rounded-md group-hover/actions:visible'>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Edit width="18" height="18" color="#db3828"/>
                </div>
                <div className="cursor-pointer hover:bg-gray-200">
                  <Delete width="18" height="18" color="#db3828"/>
                </div>
            </div>
          </div>
        </div> 
  
      </div>
      </div>
    </>
  )
}

export default Lists