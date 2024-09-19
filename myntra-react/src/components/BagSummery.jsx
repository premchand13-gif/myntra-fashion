import React from "react";
import { useSelector } from "react-redux";

const BagSummery = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  let mrpAmount = 0;
  let discount = 0;
  let totalAmount = 0;
  bagItems.map((id) => {
    items.map((item) => {
      if (item.id == id) {
        mrpAmount += Number(item.price.actual);
        discount += Number(item.price.discount);
        totalAmount += Number(item.price.current);
      }
    });
  });

  return (
    <div className="price-details-box">
      <div className="items-count">PRICE DETAILS ({bagItems.length} Items)</div>
      <div className="total-mrp-box">
        <span>Total MRP</span>
        <span>Rs. {mrpAmount}</span>
      </div>
      <div className="discount-box">
        <span>Discount on MRP</span>
        <span className="fee">-Rs. {discount}</span>
      </div>
      <div className="coupon-box">
        <span>Coupon Discount</span>
        <span className="coupon">Apply Coupon</span>
      </div>
      <div className="platform-box">
        <span>Platform Fee</span>
        <span className="fee">Free</span>
      </div>
      <div className="shipping-box">
        <span>Shipping Fee</span>
        <span className="fee">Free</span>
      </div>
      <div className="total-amount">
        <span>Total Amount</span>
        <span>Rs. {totalAmount}</span>
      </div>
      <button className="place-order" onClick={console.log("bagsummery")}>
        PLACE ORDER
      </button>
    </div>
  );
};

export default BagSummery;
