import { NextPage } from "next";
import { Divider } from "../components/shared/Divider";
import { Button } from "../components/shared/Button";
import { MainLayouts } from "../layouts/MainLayouts";


export const exception1: NextPage = () => {
  return (
    <div>
      <MainLayouts title="top">
          <div className="flex flex-col items-center">
            <div>
              <img src="exception.png" />
            </div>
            <div>
              <p>他の洋服の色を撮影してお試しください</p>  
            </div>
            <Divider/>
            <div>
              <Button button className="mt-8 mb-10">続けて洋服の写真を撮る</Button>
            </div>
          </div>
      </MainLayouts>
    </div>
  );
};

export default exception1;