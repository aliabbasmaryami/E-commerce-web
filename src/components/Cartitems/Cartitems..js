import React, { useContext } from "react";
import "../Cartitems/Cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";
// import CartItems from '../Cartitems/Cartitems.js';

const Cartitems = () => {
  const {getTotalCartAmount, all_product, CartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="Cartitem">
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (CartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitem-format cartitem-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cart-item-quantity">
                  {CartItems[product.id]}
                </button>
                <p>{product.new_price * CartItems[product.id]}</p>
                <img
                  className="cart-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-items">
              <p>Shipping fee</p>
              <p>Fee</p>
            </div>
            <hr />
            <div className="cartitem-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>if you have a promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="promo code" />
          </div>
          <div className="cartitem-promocode-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
