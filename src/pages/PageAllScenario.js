import React, { useState } from 'react'
import AllScenario from '../components/AllScenario'
import LeftNavbar from '../components/LeftNavbar'

const PageAllScenario = () => {
    const [flag, setFlag] = useState('allScene')


  return (
    <div className='flex'>
        <div style={{flex: '.15'}} className='bg-nav'>
            <LeftNavbar flag={flag} />
        </div>
        <div style={{flex: '.85'}} className='h-screen bg-main text-white'>
            <AllScenario />
        </div>
    </div>
  )
}

export default PageAllScenario