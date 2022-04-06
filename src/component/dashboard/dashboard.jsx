import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Dropdown, Spin } from 'antd'
import 'antd/dist/antd.css'
import '../assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    HomeOutlined,
    UnorderedListOutlined,
    UserOutlined,
    DownOutlined, 
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import DropDown from './dropdown';
const { Header, Content, Footer } = Layout
export default function Dashboad(permission) {
    const location = useLocation()
    const [loading, setLoading] = useState(false);
    function spinner(){
        if(loading===true)
            return <Spin />
    }
    const navigate = useNavigate()
    const api= axios.create({
        baseURL:'http://127.0.0.1:8000/auth/api',
        headers: {
            "Authorization": `Token ${location.state.token}`
            }
        }
    )
    const logout=()=>{
        api.post('/logout/').then(
            res=> {
                setLoading(true)
                setTimeout(() => {
                    console.log(res)
                    localStorage.clear();
                    navigate("/")
                }, 2000);
            }
            ).catch(
                error=>console.log('res \n', error)
                )
    }
    const [dropDown, setDrop]=useState({opacity:'opacity_0', toggle:false})
    const handleClick= ()=>{
        !dropDown.toggle ? setDrop({opacity:'opacity_100', toggle:true}):
        setDrop({opacity:'opacity_0', toggle:false})
    }

    return(
        <div>
        <Header className='p-0'>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item className='logo'>Booking</Menu.Item>
            <Menu.Item icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
            <Menu.Item icon={<UnorderedListOutlined />} ><Link to="/rooms">My Rooms</Link></Menu.Item>
            <Menu.Item className='Account' icon={< UserOutlined/>} onClick={handleClick}>
                {location.state.username}
            </Menu.Item>

        </Menu>
{spinner()}
        </Header>
        <DropDown dropDown={dropDown} logout={logout}/>
        </div>
    );
}