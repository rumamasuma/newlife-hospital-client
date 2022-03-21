import React from 'react';
import doctor from '../../../images/doctor.png';
import patients from '../../../images/patients.png';
import bed from '../../../images/hospital-bed.png';

const ChooseUs = () => {
 
    return (
        <div className='container'>
            <h1 className='about-heading2 p-3 m-3'>Why Choose Us ?</h1>
   
            <div className="row row-cols-1 row-cols-md-3 g-4" >
  <div className="col">
    <div className="card h-100">
      <img src={doctor} className="card-img-top img-fluid w-25 mx-auto mt-3" alt="..."/>
      <div className="card-body">
        <h1 className="card-title">80+</h1>
        <p className="card-text">Doctors At Work</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={patients} className="card-img-top img-fluid w-25 mx-auto mt-3" alt="..."/>
      <div className="card-body">
        <h1 className="card-title">1050+</h1>
        <p className="card-text">Happy Patients</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={bed} className="card-img-top img-fluid w-25 mx-auto mt-3" alt="..."/>
      <div className="card-body">
        <h1 className="card-title">400+</h1>
        <p className="card-text">Bed Facility</p>
      </div>
    </div>
  </div>

</div>

        </div>
    );
};

export default ChooseUs;