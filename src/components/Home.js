import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [scenario, setScenario] = useState()
  const navigate = useNavigate()

  const scenarioSelector = (e)=>{
    setScenario(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className='mt-4 ml-8'>
      <label>Scenario</label>
      <br />
      <select value={scenario} onChange={(e)=>scenarioSelector(e)} required className='mt-1 pl-4 py-1 pr-4 bg-main border border-grey rounded w-52'>
        <option value="" disabled selected hidden>Select Scenario</option>
        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>Test Scenario</option>
        <option className='mt-1 pl-4 py-1 pr-4 bg-main border border-gray-500'>My Scenario</option>
      </select>
      <table className='mt-5 mr-4'>
        <thead>
          <tr className='text-center bg-alt'>
            <th className='w-40 py-2'>Vehicle ID</th>
            <th className='w-40'>Vehicle Name</th>
            <th className='w-40'>Position X</th>
            <th className='w-64'>Position Y</th>
            <th className='w-40'>Speed</th>
            <th className='w-40'>Direction</th>
            <th className='w-40'>Edit</th>
            <th className='w-40'>Delete</th>
          </tr>
        </thead>
          <tbody>
            <tr className='text-center bg-hover text-black border-b'>
              <td className='py-2'>1</td>
              <td>Bus</td>
              <td>30</td>
              <td>215</td>
              <td>3</td>
              <td>Towards</td>
              <td><EditIcon /></td>
              <td><DeleteIcon /></td>
            </tr>
            <tr className='text-center bg-hover text-black border-b'>
                <td className='py-2'>2</td>
                <td>Car</td>
                <td>500</td>
                <td>500</td>
                <td>5</td>
                <td>Backwards</td>
                <td><EditIcon /></td>
                <td><DeleteIcon /></td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2 justify-end flex">
          <button onClick={()=>navigate('/addScene')} className='bg-blue py-1 px-4 rounded mr-4'>New Scenario</button>
          <button onClick={()=>navigate('/addVehicle')} type='submit' className='bg-green py-1 px-4 rounded mr-4'>Add Vehicle</button>
        </div>
    </div>
  );
};

export default Home;
