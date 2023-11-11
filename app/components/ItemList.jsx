import React from "react";
import Link from "next/link";

const ItemList = ({ products }) => {

  const tenProducts = products.slice(0,10)

  return (
    <>
      <div className="px-3 md:px-10 lg:px-10 xl:px-20 pt-28 bg-white text-black md:text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {tenProducts.map((prod) => (
          <div key={prod.id} className="p-4">
            <Link href={`/itemDetail/${prod.id}`}>
              <div className="w-full">
                <img
                  src={prod.pictureUrl}
                  width="100%"
                  height="400px"
                  style={{ cursor: "pointer" }}
                  alt="Product Image"
                />
              </div>
            </Link>
            <div className="pt-3">
              <h6 className="font-medium md:text-left pb-3">
                {prod.title}
              </h6>
              <div>
                <span className="font-thin text-gray-600">{prod.description}</span>
              </div>
              <div className="pt-3">
                <span className="font-semibold text-gray-600">${prod.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
