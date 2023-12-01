import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img onClick={window.scroll(0,0)} src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="items-price">
        <div className="item-prices-new">${props.new_price}</div>
        <div className="item-prices-old">${props.old_price}</div>
      </div>
      </Link>
    </div>
  );
};

export default Items;
