import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css'
import Hotelvector from '../assets/10966.png'
import 'antd/dist/antd.css'
import {Button, Spin } from 'antd';
import {
    FolderAddOutlined,
    UserAddOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
export default function Signup() {
    
    useEffect(()=>{
        
    }, [])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function spinner(){
        if(loading===true)
            return <div className="loading"></div>
    }

    const [email, setEmail]= useState('')
    const [password, setPassowrd]= useState('')
    const [username, setUsername]= useState('')
    const api= axios.create({
        baseURL:'http://127.0.0.1:8000/auth/api',
        headers: {
            "Content-Type": "application/json"
            }
        
        }
    )
    // api.post('/login/')
    const handleSubmit = (e)=>{
        e.preventDefault()
        login()
    }
    const redirect=_=>{
        navigate("/login");
    }
    const login =()=>{

        let resutl =api.post('/register/',{
            username: username,
            email: email,
            password: password,
            is_staff:false
        }).then(userResponse =>{
            console.log(userResponse)
            setLoading(true)
            setTimeout(() => {
                redirect()
            }, 2000);

        }).catch((errorResponse)=>{
            console.log(errorResponse)
        })
    }
    return (
    <div className='login'>
        {spinner()}
        <section className='container d-flex align-items-center justify-content-center '>
            <img src={Hotelvector} alt="" />
            <form  className='row justify-content-center' >
                    <input className='col-8 input mb-3 py-2' type="text" name="name" placeholder="Name" />
                    <input className='col-8 input mb-3 py-2' type="text" onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Username" />
                    <input className='col-8 input mb-3 py-2' type="email" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="E-mail" />
                    <input className='col-8 input mb-3 py-2' type="password" onChange={(e)=>setPassowrd(e.target.value)} name="password" placeholder="Password" />
                    <div className='col-8 text-left p-0 d-flex align-items-center justify-content-between'>
                        <Button onClick={handleSubmit} className='btn text-center'  type="primary" shape="round" icon={<UserAddOutlined />}>
                            Register
                        </Button>
                        <span >Have account ?<Link to={'/login'}> login</Link></span>
                    </div>
            </form>
        </section>
    </div>
    );
}