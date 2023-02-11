import React from "react";
import pic1 from "../assets/pic1.png"
import pic8 from "../assets/pic8.png"
import pic9 from "../assets/pic9.png"
import './home.css'
function Home() {
  return (
    <div className="home">
       <div className="left-part" >
          <img  src = {pic1} className = "pic1" alt="pic1"/> 
          <div className="left-title">Discover the <span className="best">Best</span>  Food and Drinks</div>
          <div className="left-desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed vehicula nibh. Nulla dapibus id ipsum id egestas. Aliquam enim lacus, vulputate congue libero finibus, bibendum vulputate ipsum.</div>
          <button className="left-btn">Explore Now !</button>
       </div>
       <div className="right-part">
          <img className="right-img" src = {pic8} alt="pic2"/>
          <img  src = {pic9} className = "pic9" alt="pic1"/> 
          <div className="style"></div> 
          <button className="btn-style">Get in touch</button>
       </div>
    </div>
  );
}

export default Home;