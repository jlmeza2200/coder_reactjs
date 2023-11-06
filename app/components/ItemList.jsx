import React from "react";
import Link from "next/link";

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mdgap-1 justify-items-center">
      {products.map((prod) => (
        <div key={prod.id} className="p-4">
          <Link href={`/itemDetail/${prod.id}`}>
          <img
            src={prod.pictureUrl}
            width="300px"
            height="400px"
            style={{ cursor: "pointer" }}
            alt="Product Image"
          />
          </Link>
          <h6 className="font-medium pt-2">{prod.title}</h6>
          <span className="text-center">${prod.price}</span>
        </div>
      ))}
    </div>
  );
};



export default ItemList;
