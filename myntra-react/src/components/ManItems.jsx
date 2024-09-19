import React from "react";
import { CgAdd } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const ManItems = ({ items, isAdded }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.bag);
  // console.log(bagitems);

  const Add = function (id) {
    dispatch(bagActions.Add({ itemId: id }));
  };

  const Remove = function (id) {
    dispatch(bagActions.Remove({ id: id }));
  };
  return (
    <div className="item-container">
      <img src={items.image} alt="img" className="page1-img" />
      <div className="rating">
        {items.rating.star}⭐ | {items.rating.likes}
      </div>
      <div className="company">{items.company}</div>
      <div className="item-name">{items.item}</div>
      <div className="price">
        <span className="current-price">Rs. {items.price.current}</span>
        <span className="actual-price">Rs. {items.price.actual}</span>
        <span className="discount">(Rs. {items.price.discount} OFF)</span>
      </div>

      {/* <button className="add-to-bag" onClick={() => console.log("add")}>
        Add to bag
      </button> */}
      {isAdded ? (
        <button
          type="button"
          className="btn btn-danger add-to-bag"
          onClick={() => Remove(items.id)}
        >
          <MdDeleteOutline /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary add-to-bag"
          onClick={() => Add(items.id)}
        >
          <CgAdd /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default ManItems;
