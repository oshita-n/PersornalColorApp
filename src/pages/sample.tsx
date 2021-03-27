import { useState } from "react";

const sample = () => {
  const [value, setValuse] = useState<number>(0);

  return (
    <div className="mt-10 ml-10 flex flex-col">
      <div>
        <span>{`計算結果=${value}`}</span>
      </div>
      <div>
        <input type="text" className="border border-black" />
      </div>
      <div>
        <button className="bg-gray-200" onClick={() => setValuse(value + 1)}>
          ＋１
        </button>
      </div>
    </div>
  );
};
export default sample;
