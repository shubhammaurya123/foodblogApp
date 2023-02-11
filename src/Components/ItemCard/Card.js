import React from "react";
import './Card.css'
function Card(props) {
  const{url , title} = props;
  return (
    <div className="card">
        <img  className ="card-img" src={url} alt="1"/> 
        <div className="card-title">{title}</div>
        <div className="card-dec">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
        <button className="card-btn"> Read Me</button>
    </div>
  );
}

export default Card;