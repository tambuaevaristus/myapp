import React, { useState } from "react";
import { Productt } from "../types";



export const Product = (props: Productt) => {
  const [qty, setQty] = useState<number>(0);
  const decr = () => {
    if (qty > 0) {
      setQty((qty) => qty - 1);
      props.setTotal((qty) => qty-1)
    }
  };
  const incr = () => {
    setQty((qty) => qty + 1);
    props.setTotal((qty) => qty+1)

  };

// Product has to be global to ease transfer
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-40"
          src="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <h3>{props.price}</h3>
        <div className="px-6 pt-4 pb-2 flex  gap-4">
          {qty ? (
            <button className="px-2 py-2 rounded-sm bg-blue-400" onClick={decr}>
              -
            </button>
          ) : (
            <button className="px-2 py-2 rounded-sm bg-blue-400" onClick={decr}>
              -
            </button>
          )}

          {/* quantity */}
          <p>{qty}</p>
          <button className="px-2 py-2 rounded-sm bg-blue-400" onClick={incr}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
