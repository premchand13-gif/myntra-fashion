import React from "react";
import { useSelector } from "react-redux";
import ManItems from "./ManItems";
const ManPage = () => {
  const itemList = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);
  // console.log(itemList);

  return (
    <div className="items-container">
      {itemList.map((item) => {
        const isAdded = bag.indexOf(item.id) >= 0;
        console.log(isAdded);
        return <ManItems key={item.id} items={item} isAdded={isAdded} />;
      })}
    </div>
  );
};

export default ManPage;
