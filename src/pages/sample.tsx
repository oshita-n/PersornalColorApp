import React from "react";
import { useState } from "react";

const sample = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="mt-10 ml-10 flex flex-col">
      <div>
        <span>{`計算結果=${value}`}</span>
      </div>

      <div>
        <input type="number" className="border border-black" />
      </div>

      <div>
        <button className="bg-gray-200" onClick={() => setValue(value + 1)}>
          ＋１
        </button>
      </div>
    </div>
  );
};
export default sample;
