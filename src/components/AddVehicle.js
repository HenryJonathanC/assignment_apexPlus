import React from 'react'

const AddVehicle = () => {
  return (
    <div className='ml-8 mr-8'>
      <h4 className='mt-8'>Vehicle/Add</h4>
      <h1 className='mt-8 text-2xl'>Add Vehicle</h1>
      <form className='mt-3'>
        <div>
            <div className='bg-alt py-4 px-7 flex pb-10'>
                <div className='ml-10'>
                    <label>Scenario List</label><br/>
                    <select required placeholder='Select Scenario' className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500 w-52'>
                        <option value="" disabled selected hidden>Select Scenario</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>Test Scenario</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>My Scenario</option>
                    </select>
                </div>
                <div className='ml-32'>
                    <label>Vehicle Name</label><br/>
                    <input required type='number' placeholder='Target abc' className='mt-1 pl-4 py-1 bg-main border border-gray-500 w-52' />
                </div>
                <div className='ml-32'>
                    <label>Speed</label><br/>
                    <input required type='number' placeholder='2' className='mt-1 pl-4 py-1 bg-main border border-gray-500 w-52' />
                </div>
            </div>
            <div className='bg-alt py-4 px-7 flex pb-10'>
                <div className='ml-10'>
                    <label>Position X</label><br/>
                    <input required type='number' placeholder='Target abc' className='mt-1 pl-4 py-1 bg-main border border-gray-500 w-52' />
                </div>
                <div className='ml-32'>
                    <label>Position Y</label><br/>
                    <input required type='number' placeholder='Target abc' className='mt-1 pl-4 py-1 bg-main border border-gray-500 w-52' />
                </div>
                <div className='ml-32'>
                    <label>Direction</label><br/>
                    <select required placeholder='Select Direction' className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500 w-52'>
                        <option value="" disabled selected hidden>Select Direction</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>Towards</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>Backwards</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>Upwards</option>
                        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>Downwards</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='flex mt-6'>
          <button type='submit' className='bg-green py-1 px-4 rounded mr-4'>Add</button>
          <button className='bg-orange py-1 px-4 rounded mr-4'>Reset</button>
          <button className='bg-blue py-1 px-4 rounded mr-4'>Go Back</button>
        </div>
      </form>
    </div>
  )
}

export default AddVehicle