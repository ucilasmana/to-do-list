import { useState, useRef, forwardRef } from "react"
import Modal from "./Actions/Modal"
import "./Home.css"
import { Calendar } from "../assets/Calendar"
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
     <Calendar color="#db3828"/>
    </button>
  ));

  
  const add = () =>{
    setShowModal(!showModal)
  }

  return (
    <>
    <div className="todo">
      <div className="left">
        <h4 className="appName">To-Do List</h4>
        <div className="content">
            <span className="greeting">Do you have any plans?</span>
            <div className="form">
            <input type="text" className="todoInput" placeholder="I want to ..." />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />
            </div>
            <button onClick={add}>Add</button>
          
        </div>
      </div>
      <div className="right">
        <Lists/>
      </div>
    </div>
    
  
      
   
    
    </>
  
  )
}

export default Home