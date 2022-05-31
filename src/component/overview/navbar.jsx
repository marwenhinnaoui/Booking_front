import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import '../assets/main.css'

import {
    HomeOutlined,
    PhoneOutlined,
    LoginOutlined
} from '@ant-design/icons'
import { Link, Outlet} from 'react-router-dom'
const { Header, Content, Footer } = Layout

export function Navbar(){
    return(
        <div>
        <Header className='p-0 Navbar '>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item className='logo'>Booking</Menu.Item>
                <Menu.Item icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
                <Menu.Item icon={<PhoneOutlined />} ><Link to="/contact">Contact</Link></Menu.Item>
                <Menu.Item icon={<LoginOutlined />} ><Link to="/login">Login</Link></Menu.Item>
            </Menu>
        </Header>
        <Outlet />
        </div>
    );
}