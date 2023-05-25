import React from 'react'

const LeftNavbar = () => {

  const style={
    backgroundColor: '#c2ccd1',
    color: '#1f689c',
    fontWeight: '500'
  }
  return (
    <div className='mt-10'>
        <h1 className='mt-2 pl-10 py-2 text-xl cursor-pointer hover:bg-hover'>Home</h1>
        <h1 style={style} className='mt-2 pl-10 py-2 text-xl cursor-pointer hover:bg-hover'>Add Scenario</h1>
        <h1 className='mt-2 pl-10 py-2 text-xl cursor-pointer hover:bg-hover'>All Scenario</h1>
        <h1 className='mt-2 pl-10 py-2 text-xl cursor-pointer hover:bg-hover'>Add Vehicle</h1>
    </div>
  )
}

export default LeftNavbar