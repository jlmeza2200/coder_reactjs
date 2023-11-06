"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ItemCount from "@/app/components/ItemCount";

import getProducts from "../../services/handlePromise";

const ItemDetail = ({ params }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => alert("Hay un problema...", err));
  }, []);

  const { id } = params;

  const productSelected = products.find((prod) => prod.id === id);

  return (
    <>
      <Navbar />
      <div className="w-full h-full m-auto pt-20 grid grid-cols-2 bg-white text-black">
        <div className="w-3/5 pl-60">
          <img
            alt={productSelected?.pictureUrl}
            src={productSelected?.pictureUrl}
            width="100%"
            height="70%"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div>
          <h2 className="uppercase">{productSelected?.title} </h2>
          <span className="font-semibold">${productSelected?.price}</span>
          <p className="py-4 font-thin text-gray-700">{productSelected?.description}</p>
          <ItemCount stock={5} initial={0}/>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
