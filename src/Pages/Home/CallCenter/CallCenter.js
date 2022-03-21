import React from 'react';
import callcenter from '../../../images/callcenter.jpg';
const CallCenter = () => {

    return (
        <div>
            <h1>Newlife Hospital</h1>
            <h2>Call Center</h2>
            <hr className='w-25 mx-auto' />
          <div className='container'>
          <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-6">
      <img src={callcenter} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-5 mt-5">
      <div className="card-body">
        <h5 className="card-title">For Appointment and Emergency Services</h5>
        <p className="card-text">Call 24/7 Our Hotline Number</p>
        <p className="card-text"><big className="text-primary"><i class="fa-solid fa-phone"></i>164590</big></p>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default CallCenter;