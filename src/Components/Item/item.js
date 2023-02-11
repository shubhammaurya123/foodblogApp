import React, { useState } from "react";
import Card from "../ItemCard/Card";
import "./item.css";
import pic6 from "../assets/pic6.png"
import pic2 from "../assets/pic2.png"
import pic5 from "../assets/pic7.png"
import pic4 from "../assets/pic4.png"
import pic3 from "../assets/pic3.png"
import pic7 from "../assets/pic7.png"

import {AiOutlineRight , AiOutlineLeft} from "react-icons/ai"

function Item() {

  const[istrue , setisTrue] = useState(true)
  let AllItem = [
    {
      img: pic6,
      title: "Grilled Tomatoes at Home",
    },
    {
      img: pic2,
      title: "Snacks for Travel",
    },
    {
      img: pic5,
      title: "Post-workout Recipes",
    },
  ];
  let AllItem1 = [
    {
      img: pic7,
      title: "How To Grill Corn",
    },
    {
      img: pic4,
      title: "Crunchwrap Supreme",
    },
    {
      img: pic3,
      title: "Broccoli Cheese Soup",
    },
  ];
  return (
    <div className="item">
      <div className="item-leatest"> Latest Articles</div>

      <div className="card-item">
        { (istrue? AllItem : AllItem1).map((e, i) => {
          return <Card key={i} url={e.img} title={e.title} />;
        })}
      </div>
      <div className="page-change">
        <AiOutlineLeft className="cover" onClick={()=>setisTrue(false)} />  <span className="change"> {istrue ?2 : 1} / 2</span>  <AiOutlineRight className="cover" onClick={()=>setisTrue(true)}/>
      </div>
    </div>
  );
}

export default Item;
