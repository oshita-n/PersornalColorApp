import { NextPage } from "next";
import { Divider } from "../components/shared/Divider";
import { Button } from "../components/shared/Button";
import { MainLayouts } from "../layouts/MainLayouts";


export const exeption1: NextPage = () => {
  return (
    <div>
      <MainLayouts title="top">
        <div className="flex justify-center">
          <img src="exception.png" />
        </div>
        <Divider/>
        <Divider/>
        <div className="flex justify-center">
          <Button button>続けて洋服の写真を撮る</Button>
          </div>
      </MainLayouts>
    </div>
  );
};

export default exeption1;