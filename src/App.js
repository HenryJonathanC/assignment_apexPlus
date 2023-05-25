import './App.css';
import LeftNavbar from './components/LeftNavbar';
import AddScenario from './components/AddScenario';
import AllScenario from './components/AllScenario';
import AddVehicle from './components/AddVehicle';
import Home from './components/Home';

function App() {
  return (
    <div className='flex'>
      <div style={{flex: '.15'}} className='bg-nav'>
        <LeftNavbar />
      </div>
      <div style={{flex: '.85'}} className='h-screen bg-main text-white'>
        <Home />
        {/* <AddScenario /> */}
        {/* <AllScenario /> */}
        {/* <AddVehicle /> */}
      </div>
    </div>
  );
}

export default App;
