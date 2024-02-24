import {useContext} from 'react'
import { TodoContext } from '../../App';

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const UpcomingLists = ({NoPlan, Edit, Delete, editModal, deleteModal}) => {
    const {tasks} = useContext(TodoContext);
    const tasksUpcoming = tasks.filter(task=>new Date(task.date)>new Date())
    
    console.log("UPCOMING")
  return (
    <> 
    <div className="w-full flex flex-col justify-center items-center gap-7">
       <h3 className="font-borel text-xl md:text-2xl font-semibold">Upcoming</h3>
       <div className="bg-white/90 min-h-24 w-4/5 p-5 rounded-md shadow-sm">  
       <div className="flex flex-col divide-y divide-red-200">
       {tasksUpcoming.map(task => (
         <div key={task.id} className='relative flex group/actions items-center py-2'>
           <span className='text-xs font-semibold text-gray-400'>{new Date(task.date).getDate()} {month[new Date(task.date).getMonth()]}<br/>{new Date(task.date).getFullYear()}</span>
           <label className='relative pl-4 py-2 w-5/6'>{task.activity}
           </label>
           <div className='flex flex-col absolute right-0 my-2 p-0.5 invisible gap-0.5 bg-orange-100 rounded-md group-hover/actions:visible'>
              <div className="cursor-pointer hover:bg-orange-400/40  hover:rounded-t-md" onClick={()=>editModal(task.id)}>
                      <Edit className="h-5 w-5 stroke-red-500 hover:stroke-red-600 stroke-2"/>
              </div>
              <div className="cursor-pointer hover:bg-orange-400/40  hover:rounded-b-md" onClick={()=>deleteModal(task.id)}>
                      <Delete className="fill-none h-5 w-5 stroke-red-500 hover:stroke-red-600 stroke-2"/>
              </div>
           </div>
         </div>
          ))}
       </div> 
       {tasksUpcoming.length===0 &&(
            <div className="p-4 flex flex-col gap-4 items-center justify-center">
              <NoPlan className="h-12 w-12 fill-gray-300"/>
              <span className='font-borel text-[#c6cbd2]'>No Upcoming Plans</span>
            </div>
       )}
     </div>
     </div>
    </>
  )
}

export default UpcomingLists