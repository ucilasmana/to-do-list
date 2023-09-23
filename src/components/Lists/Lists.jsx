import React from 'react'
import './Lists.css'
import Modal from '../Actions/Modal'
import More from '../../assets/more.svg'
import Edit from '../../assets/edit.svg'
import Delete from '../../assets/delete.svg'
const Lists = () => {

  const Modal = () =>{
    return <p>uhuhuhuh</p>
  }

  return (
    <div className='lists'>
      <div className="list-group">
          <h3>Today</h3>
          <div className="list">           
            <div>
            <label className='container'>Do the Groceries
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <span className="checkmark"></span>
            </label>
            <img src={More}/>
            </div>
            <div>
            <label className='container'>Make Dinner
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <span className="checkmark"></span>
            </label>
            <img src={More}/>
            </div>
            <div>
            <label className='container lineThrough'>Do the Laundry
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <span className="checkmark"></span>
            </label>
            <img src={More}/>
            </div>
            <div>
            <label className='container lineThrough'>Mop the Floor
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <span className="checkmark"></span>
            </label>
            <img src={More}/>
            </div>
          </div>
      </div>
      <div className="list-group">
          <h3>Upcoming</h3>
          <div className="list">
          <span className="dateup">Aug 21, 2023</span>
            <div>
              <label className='container'>
              <input type="checkbox" id="vehicle4" name="vehicle4" value="Bike"/> Visit the Vet
              <span className="checkmark"></span>
              </label>
              <img src={More}/>
            </div>
            <span className="dateup">Sep 1, 2023</span>
            <div>
              <label className='container'>Buy Birthday Gift for Jane
              <input type="checkbox" id="vehicle4" name="vehicle4" value="Bike"/> 
              <span className="checkmark"></span>
              </label>
              <img src={More}/>
              <div className='action'>
                <span>
                  <img src={Edit} alt="" /> Edit
                </span>
                <span>
                  <img src={Delete} alt="" /> Delete
                </span>
              </div>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Lists