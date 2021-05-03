import React from "react";
import MaterialIcons from "material-icons-react";
import logo_vid from "../../Images/logo_vid.gif";

import "./Footer.css";

const Footer = () => (
  <section id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 footer-box">
        <img
          src={logo_vid}
        />
          <p className="">Platform where mentors guide and learners learn in group and get 1 on 1 mentorship.</p>
          <i class="fa fa-facebook fa-lg"></i>
          <i class="fa fa-instagram fa-lg"></i>
          <i class="fa fa-twitter fa-lg"></i>
          <i class="fa fa-telegram fa-lg"></i>

        </div>
        <div className="col-md-4 footer-box">
          <p>
            <b>CONTACT US</b>
          </p>
          <p>
            <MaterialIcons icon="location_on" /> KIET GROUP OF INSTITUTIONS
          </p>
          <p>
            <MaterialIcons icon="call" /> +91 8791723358
          </p>
          <p>
            <MaterialIcons icon="mail_outline" /> ritikvarshney2014@gmail.com
          </p>
        </div>
        <div className="col-md-4 footer-box">
          <p>
            <b>SUBSCRIBE NEWSLETTER</b>
          </p>
          <input type="email" className="form-control" placeholder="Your Email" />
          <button type="button" className="btn btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
