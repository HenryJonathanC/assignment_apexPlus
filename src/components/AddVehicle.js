import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddVehicle = () => {
  const navigate = useNavigate()
  const [scenario, setscenario] = useState()
  const [vehicleName, setVehicleName] = useState()
  const [speed,setSpeed] = useState()
  const [x, setX] = useState()
  const [y, setY] = useState()
  const [direction, setDirection] = useState()

  const addVehicleHandler = (e) =>{
    e.preventDefault()
    console.log(scenario, vehicleName, speed, x, y, direction)
  }

  const resetHandler = () =>{
    setscenario()
    setVehicleName()
    setSpeed()
    setX()
    setY()
    setDirection()
  }

  return (
    <div className='ml-8 mr-8'>
      <h4 className='mt-8'>Vehicle/Add</h4>
      <h1 className='mt-8 text-2xl'>Add Vehicle</h1>
      <form className='mt-3'>
        <div>
            <div className='bg-alt py-4 px-7 flex pb-10'>
                <div className='ml-10'>
                    <label>Scenario List</label><br/>
                    <select value={scenario} onChange={e=>setscenario(e.target.value)} required placeholder='Select Scenario' className='mt-1 pl-4 py-1 pr-4 bg-main border border-grey rounded w-52'>
                        <option value="" disabled selected hidden>Select Scenario</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>Test Scenario</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>My Scenario</option>
                    </select>
                </div>
                <div className='ml-32'>
                    <label>Vehicle Name</label><br/>
                    <input value={vehicleName} onChange={e=>setVehicleName(e.target.value)} required type='text' placeholder='Target abc' className='mt-1 pl-4 py-1 bg-main border border-grey rounded w-52' />
                </div>
                <div className='ml-32'>
                    <label>Speed</label><br/>
                    <input value={speed} onChange={e=>setSpeed(e.target.value)} required type='number' placeholder='0' className='mt-1 pl-4 py-1 bg-main border border-grey rounded w-52' />
                </div>
            </div>
            <div className='bg-alt py-4 px-7 flex pb-10'>
                <div className='ml-10'>
                    <label>Position X</label><br/>
                    <input value={x} onChange={e=>setX(e.target.value)} required type='number' placeholder='eg: 50' className='mt-1 pl-4 py-1 bg-main border border-grey rounded w-52' />
                </div>
                <div className='ml-32'>
                    <label>Position Y</label><br/>
                    <input value={y} onChange={e=>setY(e.target.value)} required type='number' placeholder='eg: 5' className='mt-1 pl-4 py-1 bg-main border border-grey rounded w-52' />
                </div>
                <div className='ml-32'>
                    <label>Direction</label><br/>
                    <select value={direction} onChange={e=>setDirection(e.target.value)}  required placeholder='Select Direction' className='mt-1 pl-4 py-1 pr-4 bg-main border border-grey rounded w-52'>
                        <option value="" disabled selected hidden>Select Direction</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-grey'>Towards</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-grey'>Backwards</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-grey'>Upwards</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-grey'>Downwards</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='flex mt-6'>
          <button onClick={e=>addVehicleHandler(e)} type='submit' className='bg-green py-1 px-4 rounded mr-4'>Add</button>
          <button onClick={resetHandler} className='bg-orange py-1 px-4 rounded mr-4'>Reset</button>
          <button onClick={()=>navigate(-1)} className='bg-blue py-1 px-4 rounded mr-4'>Go Back</button>
        </div>
      </form>
    </div>
  )
}

export default AddVehicle