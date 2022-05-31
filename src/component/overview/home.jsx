import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Spin, Card, Avatar, Input, Space, Button } from 'antd'
import 'antd/dist/antd.css'
import '../assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    ArrowRightOutlined, 
    SearchOutlined
} from '@ant-design/icons'
import Room from './room'
export default function Home(){
    const { Meta } = Card
    const { Search } = Input
    const [SearchValue, SetSearch] = useState('')
    function Validate (v, e){
            if(v.indexOf(e)!=-1)
                return true
                else 
                return false
    }
    const location = useLocation()
    const [Loading, setLoading] = useState(true);
    // function Loading(){
    //     if(loading===true)
    //         return <div className="loading"></div>
    // }
    const onSearch= (e)=>{
        // console.log(e.target.value)
        SetSearch(e.target.value)
        console.log(SearchValue)
    }
    const URL='http://127.0.0.1:8000/api/all/'
    const api= axios.create({
        baseURL:URL,
        }
    )
    const [Rooms, setRooms]= useState([])
    useEffect(async ()=>{
        const res= await axios(URL);
        setRooms(res.data)
        console.log(Rooms.length)
        console.log(Rooms)
        if(Rooms.length > 0)
            setLoading(false)
    }, [Rooms]) 
        return(
        <div className='row me-0 Content'>
            {(Loading) ? <Spin className='Spin' /> : <div></div>}
        <dir className='col-12 p-3 Rooms'>
        <div className='col-3 mb-3 d-flex justify-content-end w-100'>
        <Input placeholder="Search" className='float-end w-25' onChange={onSearch} prefix={<SearchOutlined />} />
        </div>
        <div className='row'>

                {
                    Rooms.map((item, index)=>{
                        console.log(Validate(item.hotel.nameHotel,SearchValue))
                        if(Validate(item.hotel.nameHotel,SearchValue )){
                            return(
                                <div className='col-3 m-0' key={index.toString()}>
                                    <Room className="w-100" person={item.person} image={item.image} name={item.hotel.nameHotel} location={item.hotel.location}  description={item.hotel.description} stars={item.hotel.stars} />
                                </div>
                )}
                    })
                }
            
        </div>
        </dir>
        </div>

    );
}