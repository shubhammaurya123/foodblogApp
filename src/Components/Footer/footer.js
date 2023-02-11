import React from "react";
import pic1 from "../assets/pic1.png"
import './footer.css'
import {AiFillFacebook} from "react-icons/ai"
import { FiInstagram} from "react-icons/fi"
import { BsTwitter} from "react-icons/bs"

function Footer() {
  return (
    <div className="footer">
        <img src={pic1} className="footer-img" alt="pic1"/>
        <div className="contact">
          <div className="union">
              contact us
          </div>
           <span> Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</span>
           <span> example2020@gmail.com </span>
           <span> 904-443-0343</span>
        </div>
        <div className="more-info">
          <div className="union">More</div>
          <span> About us</span>
          <span>Producs </span>
          <span> Career</span>
          <span> Contact Us</span>
        </div>
        <div className="social-link">
          <div className="union val">social link</div>
          <FiInstagram className="gap"/>
          <BsTwitter className="gap"/>
          <AiFillFacebook className="gap"/>
          <div className="copyright">© 2022 Food Truck Example</div>
        </div>
    </div>
  );
}

export default Footer;
