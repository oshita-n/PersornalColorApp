import { NextPage } from "next";
import { Divider } from "../components/shared/Divider";
import { Button } from "../components/shared/Button";
import { MainLayouts } from "../layouts/MainLayouts";

export const avatorTemplate: NextPage = () => {
  return (
    <div>
      <MainLayouts title="top">
          <div className="flex flex-col items-center">
          <div className="w-72 h-72 my-4  bg-yellow-200"></div>
            <p>あなたの顔が認識されました</p>
            <Divider/>
            <div>
              <Button button className="mt-8 mb-10">洋服の写真を撮る</Button>
            </div>
          </div>
      </MainLayouts>
    </div>
  );
};

export default avatorTemplate;