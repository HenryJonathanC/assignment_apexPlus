import React, { useState } from 'react'
import AddScenario from '../components/AddScenario'
import LeftNavbar from '../components/LeftNavbar'

const PageAddScenario = () => {
  const [flag, setFlag] = useState('addScene')


  return (
    <div className='flex'>
        <div style={{flex: '.15'}} className='bg-nav'>
            <LeftNavbar flag={flag} />
        </div>
        <div style={{flex: '.85'}} className='h-screen bg-main text-white'>
            <AddScenario />
        </div>
    </div>
  )
}

export default PageAddScenario