import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {

    const {serviceId} = useParams();


    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() =>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data =>{
        const detailInfo = data.find(ServiceData => ServiceData.id == serviceId);
        setServiceDetails(detailInfo);
        // console.log(detailInfo);
    })
    },[serviceId])




    return (
        <div >
         <h2> Details About Our Services</h2>
         
        <div className='serviceDetail-card mx-auto m-5'>
        <img  src={serviceDetails.img} alt="" />
              <div className='m-2'>
              <h3>{serviceDetails.title}</h3>
              <p>{serviceDetails.description}</p>
             </div> 
        </div>
        </div>
    );
};
export default ServiceDetails;