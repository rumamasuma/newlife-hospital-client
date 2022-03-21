import React from 'react';
import chairman from '../../../images/chairman.jpg';
const Mission = () => {
    return (
        <div className='m-5 bg-secondary'>
        <h2 className='about-heading2'><i> Our Mission & Vission</i></h2>   
        <div className='row d-flex align-items-center mission p-2 '>
 <div className=" col-md-6 col-sm-12 p-2">
  <img src={chairman} alt="" className='img-fluid w-50'/>
  <h5>Chairman Of Newlife Hospital</h5>
 </div>
 <div className="  col-md-6 col-sm-12 p-2">

<div class="card">
 <div class="card-header">
<h5> PROVIDE WORLD CLASS HEALTH SERVICE</h5>
 </div>
 <div class="card-body">
   <blockquote class="blockquote mb-0">
     <p>"TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE, PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."</p>
     <footer class="blockquote-footer">By <cite title="Source Title">Chairman of Newlife Hospital</cite></footer>
   </blockquote>
 </div>
</div>
</div>
  </div>
 </div>
    );
};

export default Mission;