import React from "react";
import "./Poppular.css";
import data_product from "../../Assets/data";
import Items from '../Item/Items';
const Poppular = () => {
  return (
    <div className="poppular">
      <h1>POPPULAR IN WOMENS</h1>
      <hr />
      <div className="poppular-item">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Poppular;
