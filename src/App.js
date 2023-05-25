import './App.css';
import LeftNavbar from './components/LeftNavbar';
import AddScenario from './components/AddScenario';
import AllScenario from './components/AllScenario';
import AddVehicle from './components/AddVehicle';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import PageHome from './pages/PageHome';
import PageAddScenario from './pages/PageAddScenario';
import PageAllScenario from './pages/PageAllScenario';
import PageAllVehicle from './pages/PageAllVehicle';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' Component={PageHome} />
        <Route path='/addScene' Component={PageAddScenario} />
        <Route path='/allScene' Component={PageAllScenario} />
        <Route path='/addVehicle' Component={PageAllVehicle} />
      </Routes>
    </>
  );
}

export default App;
