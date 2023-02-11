import React from "react";
import './header.css'
import pic10 from "../assets/pic10.png"
function Header() {
  return (
    <div className="header">
       
       <div className="header-left-part">
         <img  alt = "pic10" src={pic10}  className="header-left-part-img"/>
       </div>
       <div className="header-right-part">
          <div className="about">About Us</div>
          <div className="header-dec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries</div>
          <button className="header-right-btn">Read More</button>
       </div>
       
    </div>
  );
}

export default Header;
