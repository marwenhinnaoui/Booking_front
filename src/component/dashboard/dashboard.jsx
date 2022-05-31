import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Spin } from 'antd'
import 'antd/dist/antd.css'
import '../assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    HomeOutlined,
    UnorderedListOutlined,
    UserOutlined,
    DownOutlined, 
    PoweroffOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Tablee from './table';
const { Header, Content, Footer } = Layout
export default function Dashboad() {
    const location = useLocation()
    const [loading, setLoading] = useState(false);
    function spinner(){
        if(loading===true)
            return <Spin />
    }
    const navigate = useNavigate()
    const api= axios.create({
        baseURL:'http://127.0.0.1:8000/api',
        headers: {
            "Authorization": `Token ${location.state.token}`
            }
        }
    )


    const logout=()=>{
        api.post('/auth/logout/').then(
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
    const [DropDown, setDrop]=useState(false)
    const handleClick= ()=>{
        (!DropDown)?setDrop(true) : setDrop(false)
    }
    return(
        <div>
        <Header className='p-0'>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item className='logo'>Booking</Menu.Item>
            <Menu.Item icon={<UnorderedListOutlined />} ><Link to="/rooms">My Rooms</Link></Menu.Item>
            <Menu.Item className='Account' icon={< UserOutlined/>} onClick={handleClick}>
                {location.state.username}
            </Menu.Item>

        </Menu>
        </Header>
        {(DropDown)?
            <ul className='DropDown justify-content-center m-0 p-0'>
                <li><Link className='text-white d-flex align-items-center justify-content-center' to="/"><UserOutlined className='me-1'/> Profil</Link> </li>
                <li><Link className='text-white d-flex align-items-center justify-content-center' to="/"><PoweroffOutlined className='me-1'/> Logout</Link> </li>

            </ul>
        : <div></div>}
        <Tablee />
        </div>
    );
}