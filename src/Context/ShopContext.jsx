import React, { createContext, useState } from 'react';
import all_product from '../Assets/all_product';
import Product from '../pages/Product';
// import Product from '../pages/Product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let Cart = {};
  for (let index = 0; index < all_product.length; index++) {
    Cart[all_product[index].id] = 0;
  }
  return Cart;
};

const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());
//  Add carts

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
//  remove carts

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // totaal cart items

  const getTotalCartAmount  = () =>{
    let totalAmount = 0;
    for(const item in CartItems)
    {
      if(CartItems[item]>0)
      {
        let itemInfo = all_product.find((Product)=>Product.id===Number(item))
        totalAmount += itemInfo.new_price * CartItems[Product];
        console.log(CartItems)
      }
      return totalAmount;
    }
  }

  // Count total item cart //

  const getTotalCartItems = () =>{
    let totalItem = 0;

    for(const item in CartItems)
    {
      if(CartItems[item]>0)
      {
        totalItem += CartItems[item]
      }
    }
    return  totalItem;
  }


  const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, CartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
