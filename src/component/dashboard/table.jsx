

import 'antd/dist/antd.css'
import '../assets/main.css'
// import { useState, useEffect } from 'react';
import { Table, Space } from 'antd';
import {
  DeleteFilled,
  EditFilled 
} from '@ant-design/icons'

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
import Home from '../overview/home';
import { Modal } from 'antd';
const { Header, Content, Footer } = Layout
export default function Dashboad() {
const location = useLocation()
const [loading, setLoading] = useState(false);
function Delete(params) {

}
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
const URL='http://127.0.0.1:8000/api/reservation'

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

const removeReserv = async (id) => {
  try {
    console.log(id)
    const res = await axios.delete(`${URL}/${id}`)

    console.log('Item successfully deleted.')
  } catch (error) {
    alert(error)
  }
}
const [DropDown, setDrop]=useState(false)
const [FilteredPosts, setFilteredPosts]=useState([])
const handleClick= ()=>{
(!DropDown)?setDrop(true) : setDrop(false)
}
const [Reservation , setReservation]= useState([])
useEffect(async ()=>{
const res= await axios(`${URL}`);
setReservation(res.data)
console.log(location.state.id)
}, [Reservation])


const columns = [
{
title: 'Client',
dataIndex: 'client',
key: 'client',
render: (text) => <a>{text}</a>,
},
{
title: 'Room',
dataIndex: 'room',
key: 'room',
},
{
title: 'Person',
dataIndex: 'person',
key: 'person',
},
{
title: 'StartDate',
dataIndex: 'dateStart',
key: 'dateStart',
},
{
title: 'EndDate',
dataIndex: 'dateEnd',
key: 'dateEnd',
},
{
title: 'Action',
key: 'action',
render: (_, record) => (
<Space size="middle">
        <span className='text-danger'>
          <DeleteFilled onClick={()=>removeReserv(record.id) } />
        </span> 
<span className='text-primary'>
  <EditFilled onClick={()=>showModal(record)}/>
    </span> 
  </Space>
),
},
];


const [isModalVisible, setIsModalVisible] = useState();
const showModal = (record) => {
  setRecordId(record.id)
  setIsModalVisible(true)
  setRoomPut(record.room)
  setPersonPut(record.person)
  setStartDate(record.dateStart)
  setDateEnd(record.dateEnd)
  setClient(record.client)
};

const handleOk = () => {
  setIsModalVisible(false);
  const Res = { room: RoomPut, person: PersonPut,dateStart: StartDate , dateEnd: dateEnd };
  axios.put(`${URL}/${RecordId}`, Res)
      .then(response =>{


      console.log('dfdfdfdfddf4444'); this.setState({ updatedAt: response.data.updatedAt })
    }
      
      );
};

const handleCancel = () => {
  setIsModalVisible(false);
};
//////////////////


  const [RecordId, setRecordId] = useState();
  const [RoomPut, setRoomPut] = useState();
  const [PersonPut, setPersonPut] = useState();
  const [StartDate, setStartDate] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [Client, setClient] = useState();

return(
<div>
<Header className='p-0'>
<Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
<Menu.Item className='logo'>Booking</Menu.Item>
<Menu.Item icon={<UnorderedListOutlined />} ><Link to="/" state={location.state}>Home</Link></Menu.Item>
<Menu.Item icon={<UnorderedListOutlined />} ><Link to="/rooms" state={location.state}>My Rooms</Link></Menu.Item>
{/* <Menu.Item icon={<UnorderedListOutlined />} ><Link to="/rooms">Room</Link></Menu.Item> */}
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

<Modal title="Edit Reservation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>



<form>




<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Room</label>
    <input value={RoomPut} onChange={(v)=>setRoomPut(v.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Person</label>
    <input value={PersonPut} onChange={(v)=>setPersonPut(v.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">StartDate</label>
    <input value={StartDate} onChange={(v)=>setStartDate(v.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">DateEnd</label>
    <input value={dateEnd} onChange={(v)=>setDateEnd(v.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

</form>
  </Modal>
<Table pagination={false} columns={columns} dataSource={Reservation} />

</div>
);
}
