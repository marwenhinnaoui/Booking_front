import './App.css'
import Login from './component/overview/login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboad from './component/dashboard/dashboard';
import { Navbar } from './component/overview/navbar';
import Signup from './component/overview/signup';
import Home from './component/overview/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Navbar />} >
          <Route path='/' element={<div>Test</div>} />
          <Route path="/login" element={<Login className='h-100' />} />
          <Route path="/register" element={<Signup className='h-100' />} />
        </Route>
        <Route path="/dashboard" permission={false} element={<Dashboad />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
