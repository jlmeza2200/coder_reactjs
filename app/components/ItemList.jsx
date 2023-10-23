import React from "react";

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-1 justify-items-center">
      {products.map((prod) => (
        <div key={prod.id} className="p-4">
          <img
            src={prod.pictureUrl}
            width="300px"
            height="400px"
            style={{ cursor: "pointer" }}
            alt="Product Image"
          />
          <h6 className="font-medium pt-2">{prod.title}</h6>
          <span className="text-center">${prod.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
