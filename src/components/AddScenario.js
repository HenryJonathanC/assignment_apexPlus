import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddScenario = () => {
  const navigate = useNavigate()
  const [name, setName] =useState('')
  const [time, setTime]= useState(0)

  const addHandler = (e) =>{
    e.preventDefault()
    console.log(name, time)
  }
  const resetHandler = () =>{
    setName('')
    setTime('')
  }

  return (
    <div className='ml-8 mr-8'>
      <h4 className='mt-8'>Scenario/Add</h4>
      <h1 className='mt-8 text-2xl'>Add Scenario</h1>
      <form className='mt-3'>
        <div className='bg-alt py-4 px-7 flex pb-10'>
          <div className='ml-10'>
            <label>Scenario Name</label><br/>
            <input value={name} onChange={e=>setName(e.target.value)} required type='text' placeholder='Test Scenario' className='mt-1 pl-4 py-1 bg-main border border-grey rounded' />
          </div>
          <div className='ml-32'>
            <label>Scenario Time(seconds)</label><br/>
            <input value={time} onChange={e=>setTime(e.target.value)} required type='number' placeholder='0' className='mt-1 pl-4 py-1 bg-main border border-grey rounded' />
          </div>
        </div>
        <div className='flex mt-6'>
          <button onClick={e=>addHandler(e)} className='bg-green py-1 px-4 rounded mr-4'>Add</button>
          <button onClick={resetHandler} className='bg-orange py-1 px-4 rounded mr-4'>Reset</button>
          <button onClick={()=>navigate(-1)} className='bg-blue py-1 px-4 rounded mr-4'>Go Back</button>
        </div>
      </form>
    </div>
  )
}

export default AddScenario