import '../assets/scss.scss'
import '../assets/main.css'
import { Rate, Button, Modal } from 'antd';
import {
    ArrowRightOutlined
} from '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
export default function Room(props){
    const api= axios.create({
        baseURL:'http://127.0.0.1:8000/api/',
        headers: {
            "Content-Type": "application/json"
            }
        
        }
    )
      const [isModalVisible, setIsModalVisible] = useState(false);
      const location =useLocation()
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    const HandleClick= ()=>{

        let resutl =api.post('/reservation/',{
        }).then(Response =>{}
            
            )
        }
            return (
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        <div className="mb-4 __card">
        <img src={props.image} className="card_image" alt="" />
        <div className="card__details ">
                <h5 >{props.name}</h5>            
                <h6 >{props.location}</h6>
                <p>{props.description}</p>
                <Rate disabled defaultValue={props.stars} />
                <div onClick={showModal} className="btn btn-primary mt-3 fw-bold primary d-flex align-items-center justify-content-center" >
                    <span  className='me-1'>Reserve</span> <ArrowRightOutlined />
                </div>
        </div>  
        </div>
                </div>
    );

}