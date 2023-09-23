import React, { useRef } from 'react'

const Form = ({show}) => {
    const form = useRef(null)
    if(show)
    {
        console.log(form.current.style.display)
        form.current.style.display="block"
    }
   
  return (
    <div ref={form} className='form'>
       
    </div>
  )
}

export default Form