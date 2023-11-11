'use client'

import Header from "@/app/components/Header";
import React, { useEffect, useState } from "react";
import getProducts from "@/app/services/handlePromise";
import Link from "next/link";

const MasVendido = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => alert("Hay un problema...", err));
  }, []);

  const bestSeller = products.slice(11, 16);

  return (
    <>
      <Header image="/image3.jpeg" title1="-- Top Sellers Collection" title2="HOT SELLERS" title3="Discover More" />
      <div className="px-3 md:px-10 lg:px-10 xl:px-20 pt-28 bg-white text-black md:text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {bestSeller.map((prod) => (
          <div key={prod.id} className="p-4">
            <Link href={`/mas-vendido/category/${prod.id}`}>
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

export default MasVendido;
