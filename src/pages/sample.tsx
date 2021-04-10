import type { NextPage } from "next";
import { Button } from "../components/shared/Button";

const sample: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className="m-4">
        <Button
          button
          className="w-24"
          bgColor="white"
          textColor="black"
          borderColor="gray"
        >
          YES
        </Button>
      </div>
      <div className="m-4">
        <Button button>NO</Button>
      </div>
      <div className="m-4">
        <Button button bgColor="white" textColor="gray" borderColor="bule">
          カラーパレットを見る
        </Button>
      </div>
    </div>
  );
};

export default sample;
