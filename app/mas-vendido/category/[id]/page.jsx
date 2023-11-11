"use client";

import { useEffect, useState } from "react";
import ItemCount from "@/app/components/ItemCount";

import getProducts from "@/app/services/handlePromise";

const MasVendido = ({ params }) => {
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
      <div className="custom-lg">
        <div className=" bg-white pt-20 grid md:grid-cols-2 text-black gap-10">
          <div className="flex justify-center md:justify-end">
            <img
              alt={productSelected?.pictureUrl}
              src={productSelected?.pictureUrl}
              width="450px"
              // style={{ objectFit: "contain" }}
            />
          </div>

          <div className="pt-0 md:pt-16 text-left">
            <h2 className="uppercase">{productSelected?.title} </h2>
            <span className="font-semibold">${productSelected?.price}</span>
            <p className="py-4 font-thin text-gray-700">
              {productSelected?.description}
            </p>
            <ItemCount stock={5} initial={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MasVendido;
