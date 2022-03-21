import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import banner from  '../../../images/banner2.jpg';

const Banner = () => {
    return (
        <div className ='banner'>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="First slide"
    />
       <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Third slide"
    />

   
  </Carousel.Item> 
</Carousel>
        </div>
    );
};

export default Banner;