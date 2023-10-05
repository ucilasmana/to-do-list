import { useState, useRef, forwardRef } from "react"
import Modal from "./Actions/Modal"
import "./Home.css"
import { Calendar } from "../assets/svg"
import Lists from "./Lists/Lists"
import Form from "./Actions/Form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {

  const [showModal, setShowModal] = useState(false) 

  const month = useRef(["January","February","March","April","May","June","July","August","September","October","November","December"]);

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button title="Add Due Date" className="calendar" onClick={onClick} ref={ref}>
     <Calendar width="24" height="24" color="#db3828"/>
    </button>
  ));

  
  const add = () =>{
    setShowModal(!showModal)
  }

  return (
    <>
    
    <div className="flex flex-col lg:flex-row justify-center items-center lg:overflow-hidden lg:max-h-screen">
      <div className="lg:absolute lg:top-0 lg:left-0 bg-orange-100 h-72 lg:h-screen w-full lg:w-1/2 lg:overflow-hidden">
        <span className="font-borel absolute top-4 left-4 font-semibold text-xs sm:text-base">To-Do List</span>
        <div className="mt-2 px-10 sm:px-6 sm:ml-14 flex w-full sm:w-5/6 flex-col h-72 lg:min-h-screen justify-center gap-5 lg:gap-8 ">
          <h3 className="font-rem font-bold min-[360px]:mt-4 text-2xl min-[360px]:text-3xl min-[520px]:text-4xl md:text-5xl">Do you have any plans ?</h3>
          <div className="flex w-full items-end justify-end">
          <input type="text" placeholder="I want to ..." className="w-full bg-transparent placeholder-current border-b-2 border-red-600 py-2 text-sm min-[360px]:text-base sm:text-lg md:text-xl font-light font-rem text-gray-500 outline-none focus:border-red-700"/>
          <DatePicker 
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />
          </div>
          <button className="bg-red-600 text-white rounded-lg  font-semibold  self-end w-12 min-[360px]:w-16  h-7 min-[360px]:h-9 sm:h-10 text-xs min-[360px]:text-base md:text-lg font-rem">Add</button>     
        </div>
      </div>
      <div className="lg:absolute top-0 right-0 lg:w-1/2 w-full flex lg:max-h-screen flex-col items-center lg:overflow-auto justify-between gap-10 py-10 px-6 text-sm md:text-base">
        <Lists/>
      </div>
    </div>

    
  
      
   
    
    </>
  
  )
}

export default Home