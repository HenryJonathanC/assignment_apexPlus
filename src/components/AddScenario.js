import React from 'react'

const AddScenario = () => {
  return (
    <div className='ml-8 mr-8'>
      <h4 className='mt-8'>Scenario/Add</h4>
      <h1 className='mt-8 text-2xl'>Add Scenario</h1>
      <form className='mt-3'>
        <div className='bg-alt py-4 px-7 flex pb-10'>
          <div className='ml-10'>
            <label>Scenario Name</label><br/>
            <input required type='text' placeholder='Test Scenario' className='mt-1 pl-4 py-1 bg-main border border-gray-500' />
          </div>
          <div className='ml-32'>
            <label>Scenario Time(seconds)</label><br/>
            <input required type='number' placeholder='10' className='mt-1 pl-4 py-1 bg-main border border-gray-500' />
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

export default AddScenario