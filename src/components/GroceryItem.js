import React from "react";

const GroceryItem = () => {
  return (
    <div className="item-container">
      <img alt="placeholder" src="https://via.placeholder.com/150" />
      <p className="item-title">Item Title</p>
      <p className="item-price">$4.65</p>
      <button className="button-add">ADD TO CART</button>
    </div>
  );
};

export default GroceryItem;
