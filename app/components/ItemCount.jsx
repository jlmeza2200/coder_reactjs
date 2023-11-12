"use client";

import Link from "next/link";
import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    count < stock && setCount(count + 1);
  };

  const onRemove = () => {
    count > 1 && setCount(count - 1);
  };

  const handleAddProduct = () => {
    setCount(0)
    console.log(count);
  }
  
  return (
    <>
      <div className="w-custom-md flex items-center gap-4">
        {/* Contador */}
        <div className="w-24 flex gap-3 items-center border border-gray-300 text-gray-500 py-1 px-6">
          <button onClick={onRemove}>
            <span className="text-2xl font-bold -mt-10">-</span>
          </button>
          <span className="text-xl font-medium">{count}</span>
          <button onClick={onAdd}>
            <span className="text-2xl font-bold">+</span>
          </button>
        </div>

        {/* Btn Agregar al carrito y Comprar */}
        <div className="flex gap-4" paddingLeft="25px">
          <button onClick={handleAddProduct} className="px-10 py-2 border-2 border-black bg-black text-white">
            Agregar al carrito
          </button>
          <Link href="/kart">
            <button className="px-10 py-2  border-2 border-black bg-black text-white">
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
