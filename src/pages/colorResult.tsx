import { NextPage } from "next";
import { Divider } from "../components/shared/Divider";
import { FittingColor } from "../components/shared/FittingColor";
import { Button } from "../components/shared/Button";
import { MainLayouts } from "../layouts/MainLayouts";

export const colorResult: NextPage = () => {
  return (
    <div>
      <MainLayouts title="Top">
        <div className="flex flex-col items-center">
          <span>この洋服の色はサマーです</span>
          <span>あなたに似合っています！</span>
          <div className="flex flex-col my-2">
            <FittingColor bgColor="#b0cde5" bodyColor="#67a8dd" />
          </div>
          <Divider />
          <div className="flex flex-col items-center w-72 h-24 my-4 space-y-3">
            <Button button className="w-full bg-gray-400">ライブラリに保存</Button>
            <Button button className="w-full bg-gray-400">他の似合う色を見る</Button>
            <Button button className="w-full bg-gray-400">続けて洋服の写真を撮る</Button>
          </div>
        </div>
      </MainLayouts>
    </div>
  );
};

export default colorResult;