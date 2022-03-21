import React from 'react';
import { Card } from 'react-bootstrap';
import './AboutUs.css';



const AboutUs = () => {


    return (
        <div className= 'container '>
            <h1 className='about-heading m-3' >About Us</h1>
            <Card>
      <Card.Text className='rounded  m-3'>
      <h2 ><i>Your Health Care is Our Responsibility</i></h2>
      <h4> <span className='about-heading2 p-3 m-3'> We are Providing Best and Affordable Healthcare </span> |<span className='about-heading m-3'> Our Quality System is Ready to Help You!</span></h4>
   <h5 className='m-5'>Newlife Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards. </h5>
      </Card.Text>
  </Card>
       </div>
    );
};

export default AboutUs;