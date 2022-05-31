import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Login from './login'
import { Navbar } from './navbar';
import Signup from './signup';
export default function Overview(){
    const location=useLocation()
    return (
        <div className="App">
            <Navbar />
            <Route>
                <Route path="/login" element={<Login className='h-100' />} />
                
                <Route path="/register"  />
                
            </Route>
        </div>
    );
}