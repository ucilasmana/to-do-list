import {useState, useContext, useRef, forwardRef, useEffect} from 'react'
import { Calendar } from "../../asset/svg"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css"
import { TodoContext } from '../../App';
import UpcomingLists from '../Lists/UpcomingLists';

 const checkValue = (value) => {
    if (!value.trim()) {
      return false;
    } else {
      return true;
    }
  };

const Form = () => {

  const {tasks, modal, taskDispatch, modalDispatch} = useContext(TodoContext);

  const [activity, setActivity] =useState('')
  const [startDate, setStartDate] = useState(null);
 
 useEffect(()=>{
  if(modal.modalType==='Edit'){
    const editTask = tasks.find(task => task.id === modal.selectedId)
    if(editTask)
        {
          setStartDate(new Date(editTask.date))
          setActivity(editTask.activity)
        }
        else{
         alert("Sorry, we can’t find the plan you are asking for")
        }
  }
  else if(modal.modalType==='Delete'){
    setStartDate(new Date());
  }
 }, [modal.show])
    
  function handleAddTask(activity, date){
    if (checkValue(activity)) {
        taskDispatch({
            type:'added',
            id:Math.random().toString(36).substring(2),
            activity:activity,
            date:date,
        })
        setActivity('')
    }
    else{
       alert("Please write your plan first")
    }
  }
  function handleEditTask(activity, date){
    if (checkValue(activity)) {
    taskDispatch({
      type:'changed',
      id:modal.selectedId,
      activity:activity,
      date:date
    })
    modalDispatch({
      type:'closeModal',
    })
    setActivity('')
  }
  else{
    alert("Please write your plan first")
  }
}
    const DateInput = forwardRef(({ onClick }, ref) => (
      <button type='button' title="Add Due Date" className="calendar" ref={ref} onClick={onClick}>
          <Calendar className="h-7 w-7 fill-red-600 hover:fill-red-700" />
      </button>
    ));

   
  return (
   <>
   <form className='text-right' onSubmit={(event)=>{
        event.preventDefault() 
        modal.show? handleEditTask(activity, startDate) : handleAddTask(activity, startDate)    
      } 
    }>
    <div className="flex w-full items-end justify-end my-5">
          <input value={activity} onChange={e=>setActivity(e.target.value)} placeholder="I want to ..." className="w-full bg-transparent  placeholder-gray-500 border-b-2 border-red-600 py-2 text-sm min-[360px]:text-base sm:text-lg md:text-xl font-light font-rem text-gray-700 outline-none focus:border-red-700" required/>
          <DatePicker 
              selected={startDate}
              onChange={(date) => setStartDate(date)} minDate={new Date()}
              customInput={<DateInput />}
          />
      </div>
      <button type="submit" className="bg-red-600 hover:bg-red-700 text-white rounded-lg self-end font-semibold w-12 min-[360px]:w-16  h-7 min-[360px]:h-9 sm:h-10 text-xs min-[360px]:text-base md:text-lg font-rem">{modal.show?"Edit":"Add"}</button> 
   </form>
    </>
  )
}

export default Form
