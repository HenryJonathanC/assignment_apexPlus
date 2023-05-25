import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LeftNavbar = ({flag}) => {

  const navigate=useNavigate()

  const style={
    backgroundColor: '#c2ccd1',
    color: '#1f689c',
    fontWeight: '500'
  }
  const toNavigate = () =>{
    console.log(flag)
    document.getElementById(`${flag}`).style.backgroundColor = '#c2ccd1'
    document.getElementById(`${flag}`).style.color = '#1f689c'
    document.getElementById(`${flag}`).style.fontWeight = '500'
    navigate(`/${flag}`)
  }

  useEffect(()=>{
    if(flag==='home'){
      document.getElementById('home').style.backgroundColor = '#c2ccd1'
      document.getElementById('home').style.color = '#1f689c'
      document.getElementById('home').style.fontWeight = '500'
    }else if(flag==='addVehicle'){
      document.getElementById('addVehicle').style.backgroundColor = '#c2ccd1'
      document.getElementById('addVehicle').style.color = '#1f689c'
      document.getElementById('addVehicle').style.fontWeight = '500'
    }else if(flag==='addScene'){
      document.getElementById('addScene').style.backgroundColor = '#c2ccd1'
      document.getElementById('addScene').style.color = '#1f689c'
      document.getElementById('addScene').style.fontWeight = '500'
    }else if(flag==='allScene'){
      document.getElementById('allScene').style.backgroundColor = '#c2ccd1'
      document.getElementById('allScene').style.color = '#1f689c'
      document.getElementById('allScene').style.fontWeight = '500'
    }
  },[])

  
  return (
    <div className='mt-10'>
      <Link to='/home'>
        <h1 id='home' className='mt-2 pl-10 py-2 text-xl cursor-pointer hover:bg-hover'>Home</h1>
      </Link>
      <Link to='/addScene'>
        <h1 id='addScene' className='mt-2 pl-10 py-2 text-xl cursor-pointer hover:bg-hover'>Add Scenario</h1>
      </Link>
      <Link to='/allScene'>
        <h1 id='allScene' className='mt-2 pl-10 py-2 text-xl cursor-pointer hover:bg-hover'>All Scenario</h1>
      </Link>
      <Link to='/addVehicle'>
        <h1 id='addVehicle' className='mt-2 pl-10 py-2 text-xl cursor-pointer hover:bg-hover'>Add Vehicle</h1>
      </Link>
    </div>
  )
}

export default LeftNavbar