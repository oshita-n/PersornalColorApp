import { VFC } from "react";
import { Divider } from "./shared/Divider";

export const Header: VFC = () => {
  return (
    <div className="relative w-full my-6">
      <div className="flex flex-col items-center">
        <div className="w-72 h-24 bg-yellow-200">画像を張る</div>
        <span className="mb-4 mx-auto">
          あなたに似合う洋服の色をAIが探します
        </span>
      </div>
      <Divider />
    </div>
  );
};
