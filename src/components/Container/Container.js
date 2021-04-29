import React from "react";
import "./Container.css";
import Image from "../../Images/image2.svg";

const Container = () => (
  <section id="banner">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="promo-title">Welcome!</p>
          <p className="text">Don't <b>Google. </b> Just Ask.</p>
            <div class="search-container">
              <form>
              <input type="text" placeholder="Search for a mentor.." name="search" />
              <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
          {/* <button type="button" className="btn btn-primary">
            Get Started
          </button> */}
        </div>
        <div className="col-md-6 text-center">
          <img src={Image} className="img-fluid" alt="mydesk" />
        </div>
      </div>
    </div>
  </section>
);

export default Container;
