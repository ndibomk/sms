import React, { useState } from 'react'

const LibRegistration = () => {

const [form,setForm]=useState({
  name:'',
  class:'',
  regNo:'',
  photo:'',
  stream:'',
  date:'',
})


  return (
    <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Books in</h4>
      <form >
        
          <label htmlFor="">Book id</label>
        <input type="text" placeholder='books id' className='Minputs' onChange={(e)=>setForm({...form,bookid:e.target.value})} />
       
         <label htmlFor="">ISNB Number</label>
        <input type="text" placeholder='ISNB Number' onChange={(e)=>setForm({...form,ISNB:e.target.value})} className='Minputs' />
        <label htmlFor="">Book Title</label>
        <input type="text" placeholder='Book Title' onChange={(e)=>setForm({...form,Bookitle:e.target.value})} className='Minputs'  />
        <label htmlFor="">Total Books</label>
        <input type="number" placeholder='total books' onChange={(e)=>setForm({...form,totalBooks:e.target.value})} className='Minputs' />
        
        <button className="btn">
          Submit
        </button>
        
     
      </form>
    </div>
  )
}

export default LibRegistration