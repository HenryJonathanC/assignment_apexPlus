import React, { useState } from 'react'
import LeftNavbar from '../components/LeftNavbar'
import Home from '../components/Home'

const PageHome = () => {
  const [flag, setFlag] = useState('home')


  return (
    <div className='flex'>
        <div style={{flex: '.15'}} className='bg-nav'>
            <LeftNavbar flag={flag} />
        </div>
        <div style={{flex: '.85'}} className='h-screen bg-main text-white'>
            <Home />
        </div>
    </div>
  )
}

export default PageHome