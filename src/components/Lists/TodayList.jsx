import {useContext} from 'react'
import { TodoContext } from '../../App';


const TodayList = ({NoPlan, Edit, Delete, editModal, deleteModal}) => {
  
  const {tasks, taskDispatch} = useContext(TodoContext)
console.log(tasks)
  const tasksToday= tasks.filter(task=>new Date(task.date).toLocaleDateString()===new Date().toLocaleDateString())

  const incompletedTasks= tasksToday.filter(task=>task.status===false)
  const completedTasks= tasksToday.filter(task=>task.status===true)
  console.log("TODAY")
  function handleCompleteTask(taskID){
      taskDispatch({
        type:'completed',
        id:taskID
    })
  }
 
  return (
    <>

     <div className="w-full flex flex-col justify-center items-center gap-7">
        <h3 className="font-borel text-xl md:text-2xl font-semibold">Today</h3>
        <div className="bg-white/90 min-h-24 w-4/5 p-5 rounded-md shadow-sm">  
        <div className="flex flex-col divide-y divide-red-200">
          {incompletedTasks.map(task => (
              <div key={task.id} className='relative flex group/actions items-center'>
              <label className='relative pl-8 py-4 w-5/6'> {task.activity}
                  <input type="checkbox" className="appearance-none" value=""  onChange={() => handleCompleteTask(task.id)}/>
                  <span className="checkmark absolute top-5 left-1 w-4 h-4 bg-orange-100/75 ring-1 shadow-sm rounded-sm outline-none ring-red-400 checked:bg-red-500"></span>
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
           )) }
       {incompletedTasks.length===0 &&(
            <div className="p-4 flex flex-col gap-4 items-center justify-center">
              <NoPlan className="h-12 w-12 fill-gray-300"  />
              <span className='font-borel text-[#c6cbd2]'>No Plans Today</span>
            </div>
       )}
        </div> 
        {completedTasks.length!==0 &&(
        <div className='border-t border-red-200 flex flex-col sm:flex-row gap-2 justify-between items-center py-2 text-xs sm:text-sm'>
          <div className='sm:w-4/5 sm:break-words '>
          {completedTasks.map(task => (
            <label key={task.id} className='line-through text-gray-400 text-sm pr-1'>{task.activity}</label>
            ))}
          </div>
          <div className='flex sm:flex-col gap-2 sm:gap-0 items-center sm:w-1/5'>
            <h3 className='font-rem text-3xl'>{completedTasks.length}</h3>
            <span className='text-xs font-semibold sm:font-medium'>Completed</span>
          </div>
        </div>
         )}
      </div>
      </div>
    </>
  )
}

export default TodayList