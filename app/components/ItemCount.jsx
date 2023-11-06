"use client";

import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    count < stock && setCount(count + 1);
  };

  const onRemove = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <>
      <div className="flex gap-4 p-0">
        <div className="flex gap-4 border border-gray-300 px-6 my-0">
          <button onClick={onRemove} color="primary" className="text-gray-500 text-3xl">
            -
          </button>
          
          <p className="text-4xl text-black mt-7 px-2">{count}</p>
          
          <button onClick={onAdd} className="text-gray-500 text-3xl">
          +
          </button>
        </div>

        <div className="py-4">
          <button className="px-10 border-2 border-black bg-black text-white p-4">Agregar al carrito</button>
        </div>

        <div className="py-4">
          <button className="px-10 border-2 border-black bg-black text-white p-4">Comprar</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
