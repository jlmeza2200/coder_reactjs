"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getProducts from "../services/handlePromise";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => alert("Hay un problema...", err));
  }, []);

  return <ItemList products={products} />;
};

export default ItemListContainer;
