"use client"

import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import getProducts from '../services/handlePromise'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => alert("Hay un problema...", err));
  }, []);

  return (
    <div className='bg-white text-black py-20'>
        <ItemList products={products} />
        {/* <ItemCount stock={5} initial={1} /> */}
    </div>

  )
}

export default ItemListContainer