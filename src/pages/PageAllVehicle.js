import React, { useState } from 'react'
import AddVehicle from '../components/AddVehicle'
import LeftNavbar from '../components/LeftNavbar'

const PageAllVehicle = () => {
    const [flag, setFlag] = useState('addVehicle')

  return (
    <div className='flex'>
        <div style={{flex: '.15'}} className='bg-nav'>
            <LeftNavbar flag={flag} />
        </div>
        <div style={{flex: '.85'}} className='h-screen bg-main text-white'>
            <AddVehicle />
        </div>
    </div>
  )
}

export default PageAllVehicle