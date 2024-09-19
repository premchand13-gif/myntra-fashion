import React from "react";
import { TbTruckReturn } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
const BagItems = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();
  const itemDelete = function (id) {
    dispatch(bagActions.Remove({ id: id }));
  };

  return (
    <div className="bag-item-container">
      <img src={item.image} alt="" />
      <div className="product-container">
        <div className="company">{item.company}</div>
        <div className="item">{item.item}</div>
        <div className="size-box">
          <span className="size">Size: {item.size}</span>
          <span className="quantity">Qty:1</span>
        </div>
        <div className="price">
          <span className="current-price">Rs. {item.price.current}</span>
          <span className="actual-price">Rs. {item.price.actual}</span>
          <span className="discount">(Rs. {item.price.discount}OFF)</span>
        </div>
        <div className="return">
          <span>
            <TbTruckReturn className="return-symbol" />
          </span>
          <span className="days">14 days</span>
          <span className="text">return available</span>
        </div>
      </div>
      <button className="cancel-button" onClick={() => itemDelete(item.id)}>
        <span>
          <MdDelete className="delete" />
        </span>
      </button>
    </div>
  );
};

export default BagItems;
