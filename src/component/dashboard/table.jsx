import 'antd/dist/antd.css'
import '../assets/main.css'
import { useState, useEffect } from 'react';
import { Table, Space } from 'antd';
import {
  DeleteFilled,
  EditFilled 
} from '@ant-design/icons'
import axios from 'axios';
export default function Tablee(){
  const URL='http://127.0.0.1:8000/api/reservation/'
  const [Reservation , setReservation]= useState([])
  useEffect(async ()=>{
    const res= await axios(URL);
    setReservation(res.data)
    console.log(res.data)
    console.log("Reservation")
    console.log("Reservation",Reservation)
    // if(Reservation.length > 0)
    //     setLoading(false)
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
           <a href='' className='text-danger'>
           <DeleteFilled />
           </a> 
           <a href='' className='text-primary'>
          <EditFilled />
           </a> 
        </Space>
      ),
    },
  ];


  // const data = [
  //   {
  //     key: 'client',
  //     client: Reservation.client,
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];
  return(
    <div>
      <Table pagination={false} columns={columns} dataSource={Reservation} />
    </div>
  );
}