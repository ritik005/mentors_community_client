import React from "react";
import "./Services.css";
import image3 from "../../Images/image3.svg";
import image5 from "../../Images/image5.svg";

const Services = () => {
 return (
  <section id="services">
  <div class="container text-center">
    <h1 class="title">WHAT WE DO ?</h1>
    <div class="row text-center">
      <div class="col-md-4 services">
        <img
          src={image3}
          class="service-img"
        />
        <h4>Find Your Mentor</h4>
        <p>
          Explore your catalogue until you find the perfect fit.
        </p>
      </div>
      <div class="col-md-4 services">
        <img
          src={image3}
          class="service-img"
        />
        <h4>Apply for Mentorship</h4>
        <p>Fill an application, and if you're selected then you became a mentor</p>
      </div>
      <div class="col-md-4 services">
        <img
          src={image5}
          class="service-img"
        />
        <h4>Level Up Your Skills</h4>
        <p>Get the quick result for all the queries just on one click.</p>
      </div>
    </div>
    <button type="button" className="btn btn-primary">
        Become a mentor
     </button>
     <button type="button" className="btn btn-primary">
        Become a learner
     </button>
    
  </div>
</section>
 )
}

export default Services;