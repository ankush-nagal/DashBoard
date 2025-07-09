// /components/Counter.jsx
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 bg-white shadow rounded text-center ">
      <h3 className="text-lg font-semibold">Counter: {count}</h3>
      <div className="space-x-2 mt-2">
        <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-green-500 text-white rounded">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="px-3 py-1 bg-red-500 text-white rounded">
          Decrement
        </button>
      </div>
    </div>
  );
};
