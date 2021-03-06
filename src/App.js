import './App.css'
import Login from './component/overview/login'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboad from './component/dashboard/dashboard';
import { Navbar } from './component/overview/navbar';
import Signup from './component/overview/signup';
import Home from './component/overview/home';
import Tablee from './component/dashboard/table';
import { useContext } from 'react';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboad />} >
          </Route>
          <Route path="/rooms" element={<Tablee />} />
        
        <Route path="/login" element={<Login className='h-100' />} />
          <Route path="/register" element={<Signup className='h-100' />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
