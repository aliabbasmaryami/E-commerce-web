import React, { useContext } from "react";
import "../ProductDisplay/ProductDisplay.css";
import star_icon from "../../Assets/star_icon.png";
import Dull_icon from "../../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart,CartItems} = useContext(ShopContext)
  console.log(CartItems)
  
  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-right">
        <div className="ProductDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="ProductDisplay-img">
          <img className="ProductDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="ProductDisplay-left">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={Dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-disply-right-prices">
          <div className="product-disply-right-prices-old">${product.old_price}</div>
          <div className="product-disply-right-prices-new">${product.new_price}</div>
        </div>
        <div className="product-disply-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in?
        </div>
        <div className="product-disply-right-size">
          <h1>Select Size</h1>
          <div className="product-disply-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>xl</div>
            <div>XXl</div>
          </div>
        </div>
        <button onClick={() => addToCart (product.id) }>ADD to Cart</button>
        <p className="productdisplay-right-category"> <span>Category: </span> women T-Shirt crop Top</p>
        <p className="productdisplay-right-category"> <span>Tags: </span>Modern latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
