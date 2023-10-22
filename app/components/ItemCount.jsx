"use client"

import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);

    const onAdd = () => {
        count < stock && setCount(count + 1);
    }

    const onRemove = () => {
        count > 0 && setCount(count-1);
    }

  return (
    <div className="flex gap-3 py-4">
      <Button onClick={onRemove} color="primary"> - </Button>
      <p className="text-5xl font-bold text-black p-10">{count}</p>
      <Button onClick={onAdd} color="primary"> + </Button>
    </div>
  );
};

export default ItemCount;
