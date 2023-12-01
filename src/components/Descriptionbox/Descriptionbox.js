import React from "react";
import "../Descriptionbox/Descriptionbox.css";

const Descriptionbox = () => {
  return (
    <div className="Descriptionbox">
      <div className="Descriptionbox-navigator">
        <div className="Descriptionbox-nav-box">Description</div>
        <div className="Descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce Website. A website that allows people to buy and sell
          physical goods, services, and digital products over the internet
          rather than at a brick-and-mortar location. Through an e-commerce
          website, a business can process orders, accept payments, manage
          shipping and logistics, and provide customer service.
        </p>
        <br />
        <p>
          The primary goal of an e-commerce site is to sell goods online. This
          project deals with developing an e-commerce website for Online Product
          Sale. It provides the user with a catalog of different product
          available for purchase in the store. In order to facilitate online
          purchase a shopping cart is provided to the user
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;
