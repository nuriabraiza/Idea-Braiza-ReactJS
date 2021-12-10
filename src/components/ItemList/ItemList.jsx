import React from "react";
import Item from "../Item/Item";

const ItemList = ({ list }) => {
  return (
    <>
      {list.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </>
  );
};

export default ItemList;
