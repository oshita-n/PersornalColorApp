import { useState } from "react";

const sample = () => {
  const [value, setValue] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number | null>(0);
  const inputNumber = inputValue || 0;

  return (
    <div className="mt-10 ml-10 flex flex-col">
      <div>
        <span>{`計算結果=${value}`}</span>
      </div>

      <div>
        <input
          type="number"
          id="inputNumber"
          className="border border-black"
          onChange={(e) => {
            setInputValue(parseInt(e.target.value));
          }}
          value={inputValue}
        />
      </div>
      <div>
        <button
          className="bg-gray-200"
          onClick={() => setValue(value + inputNumber)}
        >
          ＋１
        </button>
      </div>
    </div>
  );
};

export default sample;
