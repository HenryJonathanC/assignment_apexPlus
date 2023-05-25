import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const AllScenario = () => {
    const navigate=useNavigate()

  return (
    <div className='ml-8 mr-8'>
        <div className='flex justify-between items-baseline'>
            <h1 className='mt-8 text-2xl'>All Scenario</h1>
            <div className='flex items-center'>
                <button onClick={()=>navigate('/addScene')} className='bg-blue py-1 px-4 rounded mr-4'>New Scenario</button>
                <button onClick={()=>navigate('/addVehicle')} type='submit' className='bg-green py-1 px-4 rounded mr-4'>Add Vehicle</button>
                <button className='bg-orange py-1 px-4 rounded mr-4'>Delete All</button>
            </div>
        </div>
        <table className='mt-5'>
            <thead>
                <tr className='text-center bg-alt'>
                    <th className='w-40 py-2'>Scenario ID</th>
                    <th className='w-40'>Scenario Name</th>
                    <th className='w-40'>Scenario Time</th>
                    <th className='w-64'>Number of Vehicles</th>
                    <th className='w-40'>Add Vehicle</th>
                    <th className='w-40'>Edit</th>
                    <th className='w-40'>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-center bg-hover text-black border-b'>
                    <td className='py-2'>1</td>
                    <td>My Scenario</td>
                    <td>10s</td>
                    <td>1</td>
                    <td><AddCircleIcon /></td>
                    <td><EditIcon /></td>
                    <td><DeleteIcon /></td>
                </tr>
                <tr className='text-center bg-hover text-black border-b'>
                    <td className='py-2'>2</td>
                    <td>Test Scenario</td>
                    <td>2s</td>
                    <td>5</td>
                    <td><AddCircleIcon /></td>
                    <td><EditIcon /></td>
                    <td><DeleteIcon /></td>
                </tr>
            </tbody>
        </table>
        {/* <div>
            <div className='flex justify-around mt-4 bg-alt py-2'>
                <h1>Scenario ID</h1>
                <h1>Scenario Name</h1>
                <h1>Scenario Time</h1>
                <h1>Number of Vehicles</h1>
                <h1>Add Vehicle</h1>
                <h1>Edit</h1>
                <h1>Delete</h1>
            </div>
            <div className='flex justify-around bg-hover py-2 text-black border-b'>
                <h1 className='ml-4'>1</h1>
                <h1 className='ml-4'>My Scenario</h1>
                <h1>Scenario Time</h1>
                <h1>Number Of Vehicles</h1>
                <h1><AddCircleIcon /></h1>
                <h1><EditIcon /></h1>
                <h1><DeleteIcon /></h1>
            </div>
            <div className='flex justify-around bg-hover py-2 text-black border-b'>
                <h1>2</h1>
                <h1>My Scenario</h1>
                <h1>Scenario Time</h1>
                <h1>Number Of Vehicles</h1>
                <h1><AddCircleIcon /></h1>
                <h1><EditIcon /></h1>
                <h1><DeleteIcon /></h1>
            </div>
        </div> */}
    </div>
  )
}

export default AllScenario