import React from "react";
import BagSummery from "./BagSummery";
import BagItems from "./BagItems";
import { useSelector } from "react-redux";
const Bag = () => {
  const items = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);
  console.log(bag);
  return (
    <div className="main">
      <div className="bag-items-container">
        {bag.map((id) => {
          return items.map((item) => {
            if (item.id == id) {
              console.log(item.id == id);
              // console.log(item);

              return <BagItems key={item.id} item={item} />;
            }
          });
        })}
      </div>

      <BagSummery />
    </div>
  );
};

export default Bag;
